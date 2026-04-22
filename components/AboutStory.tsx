import React from 'react';
import { motion } from 'framer-motion';

const AboutStory: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-6 md:px-20 relative">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
        
        {/* Sticky Label */}
        <div className="lg:col-span-3 lg:sticky lg:top-40 h-fit">
          <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-10">
            01 — THE STORY
          </h3>
        </div>

        {/* Narrative Content */}
        <div className="lg:col-span-9 space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-grotesk font-light leading-tight tracking-tight">
              A bridge between <span className="font-black italic">scalable web infrastructure</span> and <span className="font-black italic">artificial cognition</span>.
            </h2>
            
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-3xl">
              Based in Bengaluru, I immerse myself in the intersection of full-stack engineering and the frontier of Generative AI. 
              My journey is defined by a relentless pursuit of architecting robust backend pipelines, intuitive frontends, and integrating cutting-edge LLMs to solve complex, real-world problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative h-[500px] bg-zinc-900 overflow-hidden group">
              <img 
                src="/images/glass.png" 
                alt="Architecture" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white opacity-40">VISION</span>
              </div>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-sm uppercase tracking-widest text-white/40 mb-4">MINDSET</p>
              <p className="text-lg font-light leading-relaxed">
                Whether it's building complex computer vision models for agriculture, engineering high-latency REST APIs, or architecting advanced RAG pipelines, 
                I focus on the technical excellence required to make software not just functional, but deeply intelligent.
              </p>
            </div>
          </div>

          <div className="pt-20 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4">Education</h4>
              <p className="text-sm font-bold uppercase tracking-wide">VTU — B.E. CS</p>
              <p className="text-[10px] opacity-60 uppercase tracking-widest mt-1">Computer Science Graduate</p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4">Location</h4>
              <p className="text-sm font-bold uppercase tracking-wide">Bengaluru, KA</p>
              <p className="text-[10px] opacity-60 uppercase tracking-widest mt-1">Available for Remote/On-site</p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4">Focus</h4>
              <p className="text-sm font-bold uppercase tracking-wide">Full Stack Web & GenAI</p>
              <p className="text-[10px] opacity-60 uppercase tracking-widest mt-1">Building Future Systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;