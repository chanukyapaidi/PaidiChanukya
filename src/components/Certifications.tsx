import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-28 relative border-t border-white/10 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Tag matching reference design */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span className="text-[#ff5500]">CREDENTIALS</span>
          <span className="w-5 h-[2px] bg-[#ff5500] rounded-full" />
        </motion.div>

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 space-y-2"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Professional <span className="text-[#ff5500]">Certifications</span>
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
              Verified coursework and technical certifications from renowned academic institutions and industry platforms.
            </p>
          </motion.div>
        </div>

        {/* Certification Cards Grid */}
        <div className="space-y-4 max-w-4xl">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 6 }}
              className="card-dark p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-zinc-800/80 hover:border-[#ff5500]/50 transition-colors group cursor-default"
            >
              <div className="space-y-1 font-mono-code">
                <span className="text-[10px] uppercase tracking-widest text-[#ff5500] font-semibold block">
                  CERTIFICATION {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-white uppercase tracking-tight group-hover:text-[#ff5500] transition-colors">
                  {cert.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono-code">
                <span className="text-zinc-500 uppercase tracking-widest text-[11px]">ISSUED BY</span>
                <span className="text-white font-semibold uppercase tracking-wider px-3.5 py-1.5 bg-[#ff5500]/10 border border-[#ff5500]/20 rounded-full text-[#ff5500]">
                  {cert.issuer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

