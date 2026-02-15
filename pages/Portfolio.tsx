import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, ExternalLink, ArrowRight, Zap, Target, Cpu, Layers, Globe, ShieldCheck } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (p: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const imgX = useTransform(mouseXSpring, [-0.5, 0.5], ["-3%", "3%"]);
  const imgY = useTransform(mouseYSpring, [-0.5, 0.5], ["-3%", "3%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8, filter: 'blur(10px)', transition: { duration: 0.3 } }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ 
        borderRadius: "64px",
        scale: 1.03,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="group relative overflow-hidden rounded-[48px] glass border-white/10 aspect-[4/5] cursor-pointer shadow-2xl"
    >
      <motion.div style={{ x: imgX, y: imgY, scale: 1.15 }} className="absolute inset-0 w-full h-full">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/60 to-transparent p-10 flex flex-col justify-end z-10">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[8px] orbitron font-black uppercase tracking-widest text-cyan-400 border border-cyan-400/20">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="orbitron text-2xl lg:text-3xl font-black mb-3 text-white tracking-tight group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/40 text-xs lg:text-sm leading-relaxed mb-8 font-light line-clamp-2">{project.description}</p>
        <motion.button 
          onClick={(e) => { e.stopPropagation(); onClick(project); }}
          className="w-full py-4 glass border-white/20 rounded-2xl text-[9px] orbitron font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl flex items-center justify-center gap-3 group/btn"
        >
          View Case Study <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </div>
      <div className="absolute top-10 right-10 text-[7px] orbitron font-bold text-white/10 tracking-[0.4em] uppercase pointer-events-none group-hover:text-cyan-400 transition-colors">
        REF_{project.category}_00{project.id}
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'dev' | 'mobile' | 'branding' | 'uiux'>('all');
  const [pulsing, setPulsing] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setPulsing(true);
    const timer = setTimeout(() => setPulsing(false), 2000);
    return () => clearTimeout(timer);
  }, [filter]);

  const filteredProjects = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'All Clusters' },
    { id: 'web', label: 'Web Architectures' },
    { id: 'mobile', label: 'Mobile Hubs' },
    { id: 'branding', label: 'Identity / Branding' },
    { id: 'uiux', label: 'UI/UX Ecosystems' },
    { id: 'dev', label: 'Core Engineering' }
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-6 py-32 space-y-24 relative min-h-screen">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-cyan-400 text-[10px] font-black orbitron tracking-[0.6em] uppercase flex items-center justify-center gap-4">
          <div className="w-12 h-[1px] bg-cyan-400/20" /> Archive of Digital Supremacy <div className="w-12 h-[1px] bg-cyan-400/20" />
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="orbitron text-6xl md:text-8xl font-black uppercase leading-none text-white tracking-tighter">
          THE <span className="text-cyan-400 italic">LEDGER.</span>
        </motion.h1>
      </div>

      <div className="flex flex-wrap justify-center gap-3 lg:gap-6 mb-20">
        {categories.map((cat, idx) => {
          const isActive = filter === cat.id;
          return (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                boxShadow: isActive && pulsing ? [
                  "0 0 0px rgba(0,242,255,0)",
                  "0 0 35px rgba(0,242,255,0.4)",
                  "0 0 0px rgba(0,242,255,0)"
                ] : "0 0 0px rgba(0,242,255,0)"
              }}
              transition={{ delay: idx * 0.04, boxShadow: { duration: 2, repeat: isActive && pulsing ? Infinity : 0, ease: "easeInOut" } }}
              onClick={() => setFilter(cat.id as any)}
              className={`px-10 py-4 rounded-full text-[9px] orbitron font-black uppercase tracking-[0.3em] transition-all border ${isActive ? 'bg-cyan-500 text-black border-cyan-500 shadow-glow' : 'glass border-white/5 hover:bg-white/5 text-white/30 hover:text-white hover:border-white/20'}`}
            >
              {cat.label}
            </motion.button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative min-h-[600px]">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onClick={setSelectedProject} />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] flex items-center justify-center p-4 lg:p-12 overflow-hidden">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedProject(null)} className="absolute inset-0 bg-[#020408]/95 backdrop-blur-2xl" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 100 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 50 }} className="relative w-full max-w-7xl glass rounded-[60px] border-white/10 overflow-hidden shadow-2xl max-h-[92vh] flex flex-col lg:flex-row">
              <button onClick={() => setSelectedProject(null)} className="absolute top-10 right-10 z-[1100] w-14 h-14 glass rounded-3xl flex items-center justify-center text-white/20 hover:text-white hover:border-white/40 transition-all"><X size={24} /></button>
              <div className="lg:w-3/5 relative h-[300px] lg:h-auto overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#020408]/60" />
              </div>
              <div className="lg:w-2/5 p-12 lg:p-20 overflow-y-auto bg-gradient-to-b from-[#050810] to-[#020408] backdrop-blur-3xl">
                <div className="space-y-12">
                  <header>
                    <div className="text-cyan-400 text-[10px] orbitron font-black tracking-[0.5em] uppercase mb-6 flex items-center gap-4"><Target size={14} /> CLUSTER: {selectedProject.category}</div>
                    <h2 className="orbitron text-5xl font-black text-white leading-none uppercase tracking-tighter">{selectedProject.title}</h2>
                  </header>
                  <p className="text-white/50 text-xl font-light leading-relaxed">{selectedProject.longDescription || selectedProject.description}</p>
                  <div className="grid grid-cols-2 gap-10 py-12 border-y border-white/5">
                    <div className="space-y-3"><div className="text-[8px] orbitron font-bold text-white/10 uppercase tracking-[0.5em]">Compute Node</div><div className="text-xs font-black text-white uppercase flex items-center gap-3"><Cpu size={14} className="text-cyan-400" /> V_SYNC_4.8</div></div>
                    <div className="space-y-3"><div className="text-[8px] orbitron font-bold text-white/10 uppercase tracking-[0.5em]">Auth Protocol</div><div className="text-xs font-black text-white uppercase flex items-center gap-3"><ShieldCheck size={14} className="text-green-500" /> MIL_SPEC_E2E</div></div>
                  </div>
                  <button className="w-full py-6 bg-white text-black orbitron font-black text-[10px] tracking-[0.4em] rounded-3xl hover:bg-cyan-400 transition-all uppercase shadow-2xl">LIVE_UPLINK <ExternalLink size={16} className="inline ml-2" /></button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;