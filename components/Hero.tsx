
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-end p-6 md:p-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] opacity-10 select-none pointer-events-none">
        <h1 className="text-[25vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap animate-pulse">
          ENGINEER
        </h1>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10"
        >
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.4em] font-bold mb-6 opacity-60">
              Android // Generative AI // Full Stack
            </p>
            <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              Vishal<br/>Madargaon
            </h1>
          </div>
          <div className="max-w-xs mb-4">
            <p className="text-sm md:text-base opacity-70 leading-relaxed font-light uppercase tracking-wide">
              Final-year CS student specializing in Android Development and Generative AI. 
              Proven track record of building scalable full-stack applications and integrating LLMs into mobile ecosystems.
            </p>
            <div className="mt-8 flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
              >
                <div className="w-2 h-2 bg-current rounded-full" />
              </motion.div>
              <span className="text-[10px] uppercase font-bold tracking-widest flex items-center opacity-50">
                SCROLL TO EXPLORE
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="flex flex-col items-end opacity-40 text-[10px] uppercase tracking-widest font-black">
          <span>LAT: 12.9716 N</span>
          <span>LONG: 77.5946 E</span>
          <span className="mt-2">BENGALURU, IN</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
