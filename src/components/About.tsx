import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smile, Briefcase, Award, Code, Coffee, Rocket } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const coreServices = [
  'Web Development',
  'AI & Computer Vision',
  'Full-Stack Engineering',
  'API Development',
  'Database Design',
  'Problem Solving',
];

const stats = [
  { icon: Smile, value: '6.95', label: 'GPA (Computer Science)' },
  { icon: Briefcase, value: '2+', label: 'Major AI & Web Projects' },
  { icon: Award, value: '2', label: 'Professional Certifications' },
  { icon: Code, value: '10+', label: 'Technologies & Tools' },
  { icon: Coffee, value: '1000+', label: 'Hours of Engineering' },
  { icon: Rocket, value: '2027', label: 'Expected Graduation' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 relative border-t border-white/10 bg-[#0c0c0f] overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#ff5500]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Tag matching reference 'ABOUT ME —' */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span className="text-[#ff5500]">ABOUT ME</span>
          <span className="w-5 h-[2px] bg-[#ff5500] rounded-full" />
        </motion.div>

        {/* Main Grid: Left Description + Right Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading + Bio + Bullet Checklist + Download Resume Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              I Design, Code <br />
              &amp; <span className="text-[#ff5500]">Solve</span> Problems
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-xl">
              I'm an aspiring Software Development Engineer with a strong passion for creating seamless digital experiences. I enjoy building applications that are not only functional but also meaningful and intuitive.
            </p>

            {/* 2-Column Feature Checklist matching reference image */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {coreServices.map((service) => (
                <div key={service} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500]" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Download Resume Button matching reference image */}
            <div className="pt-4">
              <a
                href={personalInfo.resumeUrl}
                download="Paidi_Chanukya_Resume.pdf"
                className="btn-outline-pill inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wide uppercase group"
              >
                <span> Resume</span>
                <Download className="w-4 h-4 text-[#ff5500] group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: 6 Rounded Stat Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {stats.map((st) => {
              const IconComp = st.icon;
              return (
                <div
                  key={st.label}
                  className="card-dark p-5 rounded-2xl flex flex-col justify-between space-y-3 border border-zinc-800/80 hover:border-[#ff5500]/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500]">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-2xl font-extrabold text-white tracking-tight block">
                      {st.value}
                    </span>
                    <span className="text-[11px] font-medium text-zinc-400 leading-snug block mt-0.5">
                      {st.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

