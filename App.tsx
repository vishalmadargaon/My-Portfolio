import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import AboutStory from './components/AboutStory';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Story', id: 'about' },
    { name: 'Work', id: 'projects' },
    { name: 'Journey', id: 'experience' },
    { name: 'Core', id: 'skills' },
    { name: 'Contact', id: 'footer' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'footer'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen">
      
      {/* --- MOBILE NAVIGATION OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 100 }}
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center space-y-8"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300"
            >
              <X size={48} strokeWidth={1} />
            </button>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-5xl md:text-7xl font-black uppercase tracking-tighter hover:text-outline transition-all"
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex space-x-8 pt-12">
              <a href="https://github.com/vishalmadargaon" target="_blank" className="hover:opacity-50 transition-opacity"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/vishal-madargaon-303503324" target="_blank" className="hover:opacity-50 transition-opacity"><Linkedin size={24} /></a>
              <a href="mailto:vishalmadargaon120@gmail.com" className="hover:opacity-50 transition-opacity"><Mail size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- DESKTOP HEADER --- */}
      <header className="fixed top-0 left-0 w-full p-6 md:p-10 z-40 flex justify-between items-center mix-blend-difference">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl font-black tracking-tighter uppercase"
        >
          Vishal Madargaon
        </motion.h1>

        <div className="flex items-center space-x-10">
          {/* Navigation Links */}
          <nav className="hidden lg:flex space-x-8 text-xs font-bold tracking-[0.2em] uppercase opacity-60">
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                className={`hover:opacity-100 transition-opacity ${activeSection === item.id ? 'opacity-100 border-b border-white' : ''}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* 👇 I ADDED THESE ICONS HERE FOR YOU SO THEY SHOW ON LAPTOP 👇 */}
          <div className="hidden lg:flex items-center space-x-6">
             <a href="https://github.com/vishalmadargaon" target="_blank" className="hover:opacity-50 transition-opacity">
               <Github size={20} />
             </a>
             <a href="https://www.linkedin.com/in/vishal-madargaon-303503324" target="_blank" className="hover:opacity-50 transition-opacity">
               <Linkedin size={20} />
             </a>
             <a href="mailto:vishalmadargaon120@gmail.com" className="hover:opacity-50 transition-opacity">
               <Mail size={20} />
             </a>
          </div>

          <button onClick={() => setIsMenuOpen(true)} className="group">
            <Menu size={32} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </header>

      {/* --- MAIN SECTIONS --- */}
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <AboutStory />
        </section>
        <section id="projects" className="py-20 bg-white text-black">
          <div className="max-w-[1400px] mx-auto px-6">
            <h2 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-none mb-20">Selected<br/>Works</h2>
            <Projects />
          </div>
        </section>
        <section id="experience" className="py-20">
          <Experience />
        </section>
        <section id="skills" className="py-20 bg-zinc-950">
          <Skills />
        </section>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default App;