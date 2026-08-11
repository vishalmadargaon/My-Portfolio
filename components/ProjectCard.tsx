import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative h-full flex flex-col glass-card rounded-3xl overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Mobile Fix: Added flex-wrap and pr-4 so tech tags don't overflow */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 pr-4">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="px-2 py-1 bg-black/50 backdrop-blur-md rounded-md text-[10px] font-bold uppercase tracking-wider border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 md:p-8 flex-1 flex flex-col">
        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors flex items-center justify-between">
          {project.title}
          <Sparkles size={20} className="text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </h3>
        <p className="text-gray-400 text-sm mb-6 flex-1 italic leading-relaxed">
          "{project.pitch}"
        </p>

        <div className="bg-indigo-500/5 border border-indigo-500/20 p-4 rounded-xl mb-6">
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            Key Innovation
          </p>
          <p className="text-xs text-gray-300 leading-normal">
            {project.feature}
          </p>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <a href={project.link} className="flex-1 px-4 py-2 bg-white text-black text-center rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            Case Study <ExternalLink size={14} />
          </a>
          <a href="#" className="p-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;