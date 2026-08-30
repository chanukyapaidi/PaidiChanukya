import React from 'react';
import { motion } from 'framer-motion';

interface VisualProps {
  type: 'bloodprint' | 'travel';
}

export const ProjectVisual: React.FC<VisualProps> = ({ type }) => {
  if (type === 'bloodprint') {
    return (
      <div className="relative w-full h-64 sm:h-80 bg-[#070707] rounded-lg overflow-hidden border border-white/10 p-5 flex flex-col justify-between select-none">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 font-mono-code text-[11px]">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>CNN_MODEL_INFERENCE_ENGINE</span>
          </div>
          <span className="text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/10">
            FLASK_API v1.0
          </span>
        </div>

        {/* Middle Visual Area */}
        <div className="relative z-10 grid grid-cols-12 gap-4 items-center my-auto">
          {/* Fingerprint Scanner Visual */}
          <div className="col-span-5 sm:col-span-4 flex flex-col items-center justify-center p-4 bg-zinc-950 rounded-lg border border-white/15 relative overflow-hidden group">
            <motion.div
              className="absolute inset-x-0 h-0.5 bg-white shadow-[0_0_10px_#ffffff]"
              animate={{ y: [0, 75, 0] }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
            />
            {/* Minimal SVG Fingerprint graphic */}
            <svg className="w-12 h-12 text-zinc-300 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 12a3 3 0 0 0 3-3 3 3 0 0 0-6 0 3 3 0 0 0 3 3z" />
              <path d="M19 12a7 7 0 0 0-14 0 7 7 0 0 0 14 0z" />
              <path d="M22 12a10 10 0 0 0-20 0" />
            </svg>
            <span className="text-[9px] font-mono-code text-zinc-500 uppercase tracking-widest mt-1">FP_INPUT_NORM</span>
          </div>

          {/* CNN Prediction Breakdown */}
          <div className="col-span-7 sm:col-span-8 bg-zinc-950 p-4 rounded-lg border border-white/10 space-y-3 font-mono-code">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-zinc-400">CLASSIFICATION</span>
              <span className="text-white font-bold">GROUP B (92.4%)</span>
            </div>

            {/* Probability Bars */}
            <div className="space-y-2 text-[10px]">
              <div>
                <div className="flex justify-between text-zinc-300 mb-1">
                  <span>GROUP B</span>
                  <span>92.4%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '92.4%' }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-zinc-500 mb-1">
                  <span>GROUP O</span>
                  <span>4.1%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '4.1%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-zinc-600 rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-zinc-500 mb-1">
                  <span>GROUP A / AB</span>
                  <span>3.5%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '3.5%' }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-zinc-700 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-zinc-500 border-t border-white/10 pt-2.5 font-mono-code">
          <span>OPENCV + TENSORFLOW MODEL</span>
          <span className="text-zinc-400">CHART.JS ANALYTICS</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-64 sm:h-80 bg-[#070707] rounded-lg overflow-hidden border border-white/10 p-5 flex flex-col justify-between select-none">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 font-mono-code text-[11px]">
        <div className="flex items-center gap-2 text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span>AI_TRAVEL_COMPANION_DASHBOARD</span>
        </div>
        <span className="text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-zinc-900 border border-white/10">
          OPENAI + MAPS API
        </span>
      </div>

      {/* Main SaaS Dashboard Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-4 my-auto">
        {/* Itinerary & Location Card */}
        <div className="bg-zinc-950 p-4 rounded-lg border border-white/10 space-y-2.5 font-mono-code">
          <div className="flex items-center justify-between text-[11px] text-zinc-300">
            <span className="font-semibold text-white">PARIS, FRANCE</span>
            <span className="text-zinc-400 text-[10px]">22°C SUNNY</span>
          </div>
          <div className="text-[10px] text-zinc-400 bg-zinc-900/90 p-2.5 rounded border border-white/5 space-y-1">
            <p className="text-zinc-200 font-medium">DAY 1: EIFFEL TOWER & SEINE CRUISE</p>
            <p className="text-zinc-500 text-[9px]">PACKING LIST GENERATED • VISA VERIFIED</p>
          </div>
        </div>

        {/* Expense Bar Analytics Preview */}
        <div className="bg-zinc-950 p-4 rounded-lg border border-white/10 space-y-2.5 flex flex-col justify-between font-mono-code">
          <div className="flex items-center justify-between text-[11px] text-zinc-300">
            <span className="text-zinc-400">EXPENSE TRACKER</span>
            <span className="text-white font-bold">$1,240 / $1,500</span>
          </div>

          {/* SVG Bar Chart */}
          <div className="flex items-end gap-2 h-12 pt-1">
            <div className="flex-1 bg-zinc-900 rounded-t h-full flex flex-col justify-end">
              <motion.div initial={{ height: 0 }} whileInView={{ height: '65%' }} className="bg-white rounded-t w-full" />
            </div>
            <div className="flex-1 bg-zinc-900 rounded-t h-full flex flex-col justify-end">
              <motion.div initial={{ height: 0 }} whileInView={{ height: '85%' }} className="bg-zinc-400 rounded-t w-full" />
            </div>
            <div className="flex-1 bg-zinc-900 rounded-t h-full flex flex-col justify-end">
              <motion.div initial={{ height: 0 }} whileInView={{ height: '40%' }} className="bg-zinc-600 rounded-t w-full" />
            </div>
            <div className="flex-1 bg-zinc-900 rounded-t h-full flex flex-col justify-end">
              <motion.div initial={{ height: 0 }} whileInView={{ height: '75%' }} className="bg-zinc-300 rounded-t w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-zinc-500 border-t border-white/10 pt-2.5 font-mono-code">
        <span>JWT AUTH + MONGO DB</span>
        <span className="text-zinc-400">RECHARTS INTEGRATED</span>
      </div>
    </div>
  );
};
