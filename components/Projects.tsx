import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Banana Leaf Disease Detection",
    category: "AI Computer Vision",
    tech: "Python, TensorFlow, React, FastAPI",
    description: "Real-time image processing and classification to assist farmers with early disease detection and treatment.",
    img: "/images/banana.png",
    link: "#",
    github: "#"
  },
  {
    title: "InsightLens",
    category: "AI Vision App",
    tech: "Kotlin, Jetpack Compose, Gemini 2.5",
    description: "Real-time Android vision assistant to identify objects and read text with multilingual support.",
    img: "/images/insight.png",
    link: "#",
    github: "#"
  },
  {
    title: "KisanLink",
    category: "AI Agriculture Platform",
    tech: "React.js, Node.js, GenAI",
    description: "Connecting farmers to buyers with a voice-enabled AI chatbot for disease diagnosis.",
    img: "/images/kisanlink.png",
    link: "#",
    github: "#"
  },
  {
    title: "Smart AI Invoice",
    category: "SaaS Dashboard",
    tech: "React, Supabase, AI Parsing",
    description: "Automating invoice data extraction from unstructured PDFs using high-fidelity AI models.",
    img: "/images/saas.png",
    link: "#",
    github: "#"
  },
  {
    title: "Flight Delay Prediction",
    category: "ML Model",
    tech: "Python, Scikit-learn, AI/ML",
    description: "Historical dataset analysis yielding 85% accuracy in forecasting flight delays.",
    img: "/images/flight.png",
    link: "#",
    github: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
      {projects.map((project, idx) => (
        <motion.div 
          key={project.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx % 2 * 0.2 }}
          className="group relative"
        >
          {/* Fixed aspect ratio for YouTube style thumbnails */}
          <div className="overflow-hidden mb-8 aspect-video bg-zinc-100 rounded-xl shadow-lg border border-white/5">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-40">{project.category}</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter">{project.title}</h3>
              </div>
              <div className="flex space-x-4">
                <a href={project.github} className="hover:text-zinc-400 transition-colors"><Github size={20} /></a>
                <a href={project.link} className="hover:text-zinc-400 transition-colors"><ExternalLink size={20} /></a>
              </div>
            </div>
            <p className="text-zinc-400 font-medium tracking-tight leading-relaxed max-w-md">
              {project.description}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
              {project.tech}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;