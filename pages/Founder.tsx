
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Terminal, Globe, Cpu, Code, Layers, Hexagon, Database, Binary, Palette, Eye, PenTool } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#020408] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="grid-bg absolute inset-0 opacity-10" />
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[150px] rounded-full opacity-20" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-48 relative z-10">
        <div className="text-center mb-32 space-y-6">
           <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-cyan-400 text-[12px] font-black orbitron tracking-[0.6em] uppercase flex items-center justify-center gap-3"
            >
              <Hexagon size={14} className="animate-pulse" />
              Command Structure
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="orbitron text-5xl lg:text-7xl font-black uppercase leading-tight text-white"
            >
              THE <span className="text-cyan-400">ARCHITECTS.</span>
            </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* FOUNDER CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
             <div className="absolute inset-0 bg-cyan-400/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="glass p-12 rounded-[50px] border border-white/10 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Cpu size={120} />
                </div>
                
                <div className="mb-10 relative">
                   <div className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30 text-cyan-400 text-[9px] orbitron font-black uppercase tracking-widest mb-6">
                     Founder & Lead Engineer
                   </div>
                   <h2 className="orbitron text-4xl font-black text-white uppercase mb-2">Vihaan Sankhla</h2>
                   <div className="text-white/40 font-mono text-sm">@VihaanSankhla</div>
                </div>

                <p className="text-lg text-white/60 font-light leading-relaxed mb-10 flex-grow">
                   As the Founding Engineer, Vihaan operates at the intersection of extreme performance and cinematic design. He directs the technical architecture, ensuring every pixel serves a logical purpose.
                </p>

                <div className="space-y-6">
                  <h4 className="orbitron text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4">Core Competencies</h4>
                  <div className="grid grid-cols-2 gap-4">
                     {['System Architecture', 'Full-Stack Eng.', '3D/WebGL', 'Cloud Infra'].map((skill, i) => (
                       <div key={i} className="flex items-center gap-3 text-xs text-white/50">
                         <Terminal size={14} className="text-cyan-400" /> {skill}
                       </div>
                     ))}
                  </div>
                </div>
             </div>
          </motion.div>

          {/* CO-FOUNDER CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative"
          >
             <div className="absolute inset-0 bg-purple-500/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="glass p-12 rounded-[50px] border border-white/10 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Palette size={120} />
                </div>
                
                <div className="mb-10 relative">
                   <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 text-purple-400 text-[9px] orbitron font-black uppercase tracking-widest mb-6">
                     Co-Founder & Creative Lead
                   </div>
                   <h2 className="orbitron text-4xl font-black text-white uppercase mb-2"></h2>
                   <div className="text-white/40 font-mono text-sm">Design & QA</div>
                </div>

                <p className="text-lg text-white/60 font-light leading-relaxed mb-10 flex-grow">
                  brings the human element to our digital logic. As the lead Graphical Designer and Tester, she ensures that every interface is intuitive, accessible, and visually striking.
                </p>

                <div className="space-y-6">
                  <h4 className="orbitron text-xs font-bold text-white uppercase tracking-widest border-b border-white/5 pb-4">Core Competencies</h4>
                  <div className="grid grid-cols-2 gap-4">
                     {['Visual Design', 'UX Research', 'Quality Assurance', 'Brand Strategy'].map((skill, i) => (
                       <div key={i} className="flex items-center gap-3 text-xs text-white/50">
                         <Eye size={14} className="text-purple-400" /> {skill}
                       </div>
                     ))}
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Team;
