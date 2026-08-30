import React from 'react';
import { motion } from 'framer-motion';
import { educationHistory } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-28 relative border-t border-white/10 bg-[#070709]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span className="text-[#ff5500]">ACADEMICS</span>
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
              Academic <span className="text-[#ff5500]">Qualifications</span>
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
              Academic qualifications, degree coursework, GPA records, and educational timeline.
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl relative space-y-12">
          {/* Vertical Hairline Timeline Line */}
          <div className="absolute left-0 sm:left-32 top-3 bottom-3 w-[1px] bg-white/10 pointer-events-none" />

          {educationHistory.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-12"
            >
              {/* Period Column */}
              <div className="sm:w-32 sm:text-right font-mono-code text-xs text-[#ff5500] font-semibold shrink-0 uppercase tracking-wider pt-1">
                {edu.period}
              </div>

              {/* Timeline Indicator Dot */}
              <div className="hidden sm:block absolute left-32 -translate-x-1/2 top-2.5 w-2.5 h-2.5 rounded-full bg-[#ff5500] ring-4 ring-[#070709] shadow-[0_0_10px_#ff5500]" />

              {/* Content Card */}
              <div className="card-dark p-6 sm:p-8 rounded-2xl flex-1 border border-zinc-800/80 hover:border-[#ff5500]/40 transition-colors space-y-3 font-mono-code">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    {edu.institution}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/20 text-xs text-[#ff5500] font-semibold">
                    {edu.score}
                  </span>
                </div>

                <p className="text-sm font-medium text-zinc-300">
                  {edu.degree}
                </p>

                <p className="text-xs text-zinc-500">
                  {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

