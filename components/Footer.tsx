
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="py-20 px-6 md:px-20 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-20">
          <div className="flex-1">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-white/40 mb-10">
              04 — CONNECT
            </h2>
            <div className="space-y-4">
              <a 
                href="mailto:vishalmadargaon120@gmail.com" 
                className="block text-4xl md:text-7xl font-black uppercase tracking-tighter hover:text-outline transition-all"
              >
                Let's Build Together
              </a>
              <div className="flex space-x-8 pt-8">
                <a href="#" className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest hover:opacity-50 transition-opacity">
                  <span>LinkedIn</span>
                  <ArrowUpRight size={14} />
                </a>
                <a href="#" className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest hover:opacity-50 transition-opacity">
                  <span>Github</span>
                  <ArrowUpRight size={14} />
                </a>
                <a href="#" className="flex items-center space-x-2 text-xs font-black uppercase tracking-widest hover:opacity-50 transition-opacity">
                  <span>Resume</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-auto text-right">
            <button 
              onClick={scrollToTop}
              className="group flex items-center space-x-4 text-xs font-black uppercase tracking-[0.5em] hover:text-white transition-colors"
            >
              <span>BACK TO TOP</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight className="-rotate-90" size={16} />
              </div>
            </button>
          </div>
        </div>
        
        <div className="mt-40 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] opacity-30">
          <p>© 2026 VISHAL MADARGAON. ALL RIGHTS RESERVED.</p>
          <p>DESIGN INSPIRED BY JANIS SNE / BUILT WITH REACT & GEMINI</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
