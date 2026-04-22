import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image Container - Responsive aspect ratio & max-widths for mobile */}
          <div className="relative group order-1 lg:order-none mx-auto w-full max-w-md lg:max-w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative aspect-square sm:aspect-video lg:aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-black">
              {/* Pointing to the glass.png image */}
              <img 
                src="/images/glass.png" 
                alt="Vishal Madargaon" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105 transform"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 flex items-center gap-4">
              <span className="w-8 md:w-12 h-[2px] bg-indigo-600 inline-block"></span>
              About Me
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10">
              I'm a Full Stack Developer and GenAI Engineer with a deep-seated passion for building software that solves real-world problems. 
              From engineering robust web applications to integrating cutting-edge RAG pipelines and Gemini models, 
              I thrive at the intersection of scalable full-stack architecture and Generative AI. My goal is to craft modern, low-latency applications that make complex, intelligent technology accessible and intuitive.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="p-5 md:p-6 glass-card rounded-2xl hover:border-indigo-500/50 transition-colors">
                <Dumbbell className="text-indigo-400 mb-3 md:mb-4" size={28} />
                <h3 className="font-bold mb-2 text-base md:text-lg">Fitness Enthusiast</h3>
                <p className="text-sm text-gray-500 leading-relaxed">I find my focus and discipline at the gym, pushing physical limits to balance the mental demands of code.</p>
              </div>
              <div className="p-5 md:p-6 glass-card rounded-2xl hover:border-indigo-500/50 transition-colors">
                <Trophy className="text-purple-400 mb-3 md:mb-4" size={28} />
                <h3 className="font-bold mb-2 text-base md:text-lg">Sports Organizer</h3>
                <p className="text-sm text-gray-500 leading-relaxed">A strategist on the pitch. Whether playing cricket or organizing football tournaments, I love the teamwork and high stakes.</p>
              </div>
            </div>

            {/* Stats section - Responsive flex wrap for smaller screens */}
            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-6 md:gap-8 justify-center sm:justify-start">
               <div className="text-center">
                 <p className="text-2xl md:text-3xl font-extrabold text-white">4+</p>
                 <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Internships</p>
               </div>
               <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
               <div className="text-center">
                 <p className="text-2xl md:text-3xl font-extrabold text-white">10+</p>
                 <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">AI Projects</p>
               </div>
               <div className="hidden sm:block w-[1px] h-10 bg-white/10"></div>
               <div className="text-center">
                 <p className="text-2xl md:text-3xl font-extrabold text-white">CS</p>
                 <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">Graduate</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;