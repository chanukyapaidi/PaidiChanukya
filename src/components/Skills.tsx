import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-28 relative border-t border-white/10 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Tag matching reference design */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span className="text-[#ff5500]">MY SKILLS</span>
          <span className="w-5 h-[2px] bg-[#ff5500] rounded-full" />
        </motion.div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-2"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Tech Stack &amp; <span className="text-[#ff5500]">Capabilities</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <p className="text-base text-zinc-400 font-normal max-w-2xl">
              Languages, databases, core CS fundamentals, computer vision architectures, and software delivery tools.
            </p>
          </motion.div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((group, index) => {
            const indexFormatted = String(index + 1).padStart(2, '0');
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-dark p-8 rounded-2xl space-y-6 border border-zinc-800/80 hover:border-[#ff5500]/40 transition-colors"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono-code">
                  <span className="text-xs uppercase tracking-widest text-[#ff5500] font-semibold">
                    {indexFormatted} / {group.category}
                  </span>
                  <span className="text-xs text-zinc-500">
                    {group.skills.length} {group.skills.length === 1 ? 'ITEM' : 'ITEMS'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono-code">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 4 }}
                      className="group flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/80 border border-white/5 hover:border-[#ff5500]/50 hover:bg-[#ff5500]/5 transition-all cursor-default"
                    >
                      <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#ff5500] opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

