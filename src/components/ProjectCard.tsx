import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../types';
import { ProjectVisual } from './ProjectVisuals';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect }) => {
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-dark rounded-2xl overflow-hidden group flex flex-col justify-between border border-zinc-800/80 hover:border-[#ff5500]/50 transition-colors"
    >
      <div>
        {/* Project Visual Container */}
        <div
          onClick={() => onSelect(project)}
          className="relative cursor-pointer overflow-hidden group/visual border-b border-white/10"
        >
          <div className="transform group-hover/visual:scale-[1.02] transition-transform duration-500 ease-out">
            <ProjectVisual type={project.visualType} />
          </div>

          {/* Inspect Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff5500] text-white font-mono-code text-xs font-bold uppercase tracking-wider shadow-2xl">
              Inspect System Architecture
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Project Content Area */}
        <div className="p-8 space-y-6">
          {/* Header Row matching reference card header */}
          <div className="flex items-center justify-between font-mono-code text-xs">
            <span className="uppercase tracking-widest text-[#ff5500] font-semibold">
              PROJECT {projectNumber}
            </span>
            <span className="uppercase tracking-wider px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/20 text-[#ff5500]">
              {project.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1">
            <h3
              onClick={() => onSelect(project)}
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#ff5500] transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <p className="text-xs font-mono-code text-zinc-400">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-300 leading-relaxed font-normal">
            {project.shortDescription}
          </p>

          {/* Inline Technology List */}
          <div className="text-xs font-mono-code text-zinc-400 pt-3 border-t border-white/10 flex flex-wrap gap-x-2 gap-y-1">
            {project.technologies.slice(0, 6).map((tech, i, arr) => (
              <span key={tech} className="inline-flex items-center">
                <span className="text-zinc-300">{tech}</span>
                {i < arr.length - 1 && <span className="ml-2 text-zinc-600">·</span>}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="text-zinc-500">+ {project.technologies.length - 6} more</span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="p-8 pt-0 flex items-center justify-between gap-4">
        <button
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-wider text-white hover:text-[#ff5500] transition-colors"
        >
          View Case Study
          <div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center group-hover:bg-[#ff5500] group-hover:text-white transition-all">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono-code uppercase tracking-wider text-zinc-300 border border-white/15 hover:border-[#ff5500] hover:text-[#ff5500] transition-all"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          Code
        </a>
      </div>
    </motion.div>
  );
};

