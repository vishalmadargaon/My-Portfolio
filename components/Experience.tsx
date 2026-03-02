
import React from 'react';
import { motion } from 'framer-motion';

const experience = [
  {
    company: "Mind Matrix",
    role: "Android Development Intern (Generative AI)",
    period: "Jan 2026 – Present",
    location: "Remote",
    highlights: [
      "Integrating Gemini 2.5 Flash for complex user workflow automation.",
      "Optimizing on-device AI performance with sub-1s inference latency.",
      "Building RAG pipelines to enhance personalized chatbot accuracy."
    ]
  },
  {
    company: "Navoditha Infotech Pvt. Ltd.",
    role: "Full Stack Developer Intern",
    period: "Dec 2025 – Jan 2026",
    location: "Bengaluru",
    highlights: [
      "Engineered responsive web apps using React.js and MySQL.",
      "Reduced API latency by 15% through optimization.",
      "Managed concurrent sessions effectively with optimized logic."
    ]
  },
  {
    company: "UDR Crafts",
    role: "Mobile Development Intern",
    period: "Oct 2025 – Dec 2025",
    location: "Remote",
    highlights: [
      "Led native Android development using Kotlin and Jetpack Compose.",
      "Streamlined internal data tools for improved operational efficiency."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40 mb-10">
            02 — THE JOURNEY
          </h3>
          <h2 className="text-6xl font-black uppercase tracking-tighter leading-none sticky top-40">Professional<br/>Experience</h2>
        </div>
        
        <div className="lg:col-span-8 space-y-32 py-10">
          {experience.map((exp, idx) => (
            <motion.div 
              key={exp.company + idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-12 mb-12">
                <div>
                  <h4 className="text-4xl font-black uppercase tracking-tighter mb-2 group-hover:text-outline transition-all duration-300">
                    {exp.company}
                  </h4>
                  <p className="text-xs uppercase tracking-widest font-bold text-white/40">
                    {exp.role}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-sm font-bold tracking-widest">{exp.period}</p>
                  <p className="text-[10px] uppercase opacity-40">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-4 max-w-2xl opacity-60 font-light">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <span className="mt-2 w-1.5 h-1.5 bg-white/20 rounded-full shrink-0" />
                    <span className="text-lg leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
