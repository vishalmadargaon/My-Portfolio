import React from 'react';
import { Project, Experience, Skill } from './types';
import { 
  Smartphone, 
  Globe, 
  Zap, 
  Cpu, 
  Code2, 
  Terminal, 
  Database, 
  Layers 
} from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    title: 'KisanLink',
    pitch: 'Empowering agriculture with real-time AI crop analysis and farmer-centric data insights.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Gemini API'],
    feature: 'Architected a platform connecting farmers to buyers with a Voice-Enabled AI Chatbot for disease diagnosis.',
    image: '/kisan.jpg',
    link: '#'
  },
  {
    title: 'InsightLens',
    pitch: 'An intelligent Android vision assistant that identifies objects and reads text in multiple languages.',
    tech: ['Kotlin', 'Jetpack Compose', 'Gemini 2.5 Flash-Lite'],
    feature: 'Implemented real-time visual perception with multilingual support (Kannada, Telugu) and sub-1s latency.',
    image: '/lens.jpg', // Changed to avoid spaces. Rename your file to 'insight.jpg' or 'ailens.jpg'
    link: '#'
  },
  {
    title: 'Smart AI Invoice',
    pitch: 'Automated SaaS dashboard for high-accuracy invoice data extraction from unstructured PDFs.',
    tech: ['React', 'Supabase', 'Gemini API', 'Node.js'],
    feature: 'Built an end-to-end RAG pipeline for extracting complex financial entities from scanned documents.',
    image: '/invoice.jpg',
    link: '#'
  }, // <--- THIS COMMA WAS MISSING
  {
    title: 'Flight Delay Prediction',
    pitch: 'AI-powered flight schedule analysis',
    tech: ['Python', 'Machine Learning', 'Flask', 'React'],
    feature: 'Predicts flight delays with high accuracy using historical data.',
    image: '/flight.jpg',
    link: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Android Development Intern (Generative AI)',
    company: 'Mind Matrix',
    period: 'Jan 2026 – Present',
    location: 'Remote',
    type: 'internship',
    description: [
      'Integrating Gemini 2.5 Flash to automate complex user workflows in next-gen Android applications.',
      'Optimizing on-device AI model performance using Kotlin, ensuring low-latency inference (sub-1s).',
      'Building RAG pipelines to enhance chatbot accuracy for personalized user interactions.'
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Navoditha Infotech Pvt. Ltd.',
    period: 'Dec 2025 – Jan 2026',
    location: 'Bengaluru',
    type: 'internship',
    description: [
      'Engineered responsive web apps using React.js and MySQL, reducing API latency by 15%.',
      'Optimized database queries and backend logic to handle concurrent user sessions effectively.'
    ]
  },
  {
    role: 'Mobile Development Intern',
    company: 'UDR Crafts',
    period: 'Oct 2025 – Dec 2025',
    location: 'Remote',
    type: 'internship',
    description: [
      'Led native Android development using Kotlin and Jetpack Compose; streamlined internal data tools.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Android (Kotlin/Java)', icon: 'Smartphone', category: 'mobile' },
  { name: 'React & Tailwind', icon: 'Globe', category: 'web' },
  { name: 'Gemini AI Integration', icon: 'Zap', category: 'ai' },
  { name: 'FastAPI & Node.js', icon: 'Terminal', category: 'tools' },
  { name: 'MySQL & Supabase', icon: 'Database', category: 'tools' },
  { name: 'RAG Pipelines', icon: 'Layers', category: 'ai' },
];