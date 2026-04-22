import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: "Core Domains",
    items: ["Android Development", "Generative AI (LLMs)", "Full Stack Web", "System Architecture"]
  },
  {
    title: "Languages",
    items: ["Kotlin", "Java", "Python", "JavaScript", "SQL", "C++" ,"React.js", "Node.js", "mongodb", "wordpress"]
  },
  {
    title: "Stack",
    items: ["Jetpack Compose", "React.js", "Node.js", "MySQL", "Supabase", "Firebase"]
  },
  {
    title: "Tools",
    items: ["Git/GitHub", "Android Studio", "Vercel", "Postman", "Scikit-learn"]
  }
];

const Skills: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6">
      <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-20">
        03 — CORE CAPABILITIES
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20">
        {skillGroups.map((group, idx) => (
          <motion.div 
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-8 border-b border-white/10 pb-4">
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {group.items.map((skill) => (
                <div 
                  key={skill} 
                  className="text-2xl font-black uppercase tracking-tighter hover:italic hover:translate-x-1 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-10">Certifications</h2>
          <div className="space-y-6">
            {[
              "Building Intelligent Chatbots using AI – Analytics Vidhya",
              "Web Development Bootcamp – Udemy",
              "Exploratory Data Analysis with Python – Analytics Vidhya",
              "HP LIFE Data Science – HP Foundation"
            ].map((cert, i) => (
              <div key={i} className="flex items-center space-x-4 border-l-2 border-white/10 pl-6 py-2">
                <p className="text-sm font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-video bg-zinc-900 overflow-hidden relative group">
           <img 
            src="/images/image.png" 
            alt="Workspace" 
            className="w-full h-full object-cover object-[center_20%] opacity-40 group-hover:opacity-60 transition-opacity" 
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-[10px] font-black uppercase tracking-[1em] rotate-90">CONTINUOUS LEARNING</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;