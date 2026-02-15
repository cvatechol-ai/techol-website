import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROCESS_STEPS } from '../constants';
import { ChevronRight, Database, Terminal, Shield, Box } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <div className="pt-48 pb-20 px-6 lg:px-12 max-w-[1600px] mx-auto relative">
      <div className="text-center mb-48">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-[12px] font-black orbitron tracking-[0.8em] uppercase mb-12"
        >
          Operational Doctrine
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="orbitron text-fluid-lg font-black mb-16 uppercase leading-none text-white"
        >
          THE <span className="text-cyan-400">PROTOCOLS.</span>
        </motion.h1>
        <p className="text-2xl text-white/30 max-w-3xl mx-auto font-light leading-relaxed">
          Our methodology is a refined synthesis of agile efficiency and architectural rigor, optimized for high-complexity digital ecosystems.
        </p>
      </div>

      <div className="space-y-64 relative">
        {/* Animated Connection Line */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-px h-[calc(100%-400px)] hidden lg:block overflow-hidden">
          <motion.div 
            animate={{ 
              backgroundColor: ['rgba(34, 211, 238, 0.2)', 'rgba(34, 211, 238, 0.6)', 'rgba(34, 211, 238, 0.2)'],
              boxShadow: [
                '0 0 0px rgba(34, 211, 238, 0)', 
                '0 0 15px rgba(34, 211, 238, 0.4)', 
                '0 0 0px rgba(34, 211, 238, 0)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
          />
          <motion.div 
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent h-1/4 w-[2px] blur-[1px]"
          />
        </div>

        {PROCESS_STEPS.map((step, i) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col lg:flex-row gap-20 lg:gap-40 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 space-y-10 relative">
              <div className="orbitron text-[140px] font-black text-white/[0.03] absolute -top-24 -left-12 pointer-events-none select-none leading-none">
                {step.number}
              </div>
              
              <div className="flex items-center gap-8 relative z-10">
                <motion.div 
                  whileHover={{ 
                    scale: 1.15, 
                    borderColor: 'rgba(34, 211, 238, 0.4)',
                    boxShadow: '0 0 30px rgba(34, 211, 238, 0.2)'
                  }}
                  className="w-24 h-24 bg-white/5 glass rounded-[32px] flex items-center justify-center text-4xl border border-white/5 shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {step.icon}
                </motion.div>
                <div>
                   <div className="text-cyan-400 text-[10px] orbitron font-bold tracking-[0.4em] mb-2">PHASE {step.number}</div>
                   <h2 className="orbitron text-4xl lg:text-5xl font-black text-white">{step.title}</h2>
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-white/40 leading-relaxed font-light">{step.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                 {['Data Mining', 'Structural Audits', 'Logic Mapping', 'Risk Analysis'].slice(0, 3 + i % 2).map((tag, idx) => (
                   <motion.div 
                     key={idx} 
                     whileHover={{ x: 5, color: '#22d3ee' }}
                     className="flex items-center gap-3 text-[10px] orbitron font-bold text-white/30 uppercase tracking-widest transition-colors cursor-default"
                   >
                     <ChevronRight size={14} className="text-cyan-400" /> {tag}
                   </motion.div>
                 ))}
              </div>
            </div>

            <div className="flex-1 w-full relative group">
              <motion.div 
                whileHover={{ 
                  scale: 1.03,
                  borderColor: 'rgba(34, 211, 238, 0.2)',
                  boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(34, 211, 238, 0.1)'
                }}
                className="aspect-[16/10] glass rounded-[60px] border border-white/5 flex items-center justify-center relative overflow-hidden transition-all duration-700 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] to-transparent" />
                
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity p-12">
                   <div className="w-full h-full border border-dashed border-white/10 rounded-[40px] relative overflow-hidden">
                      <motion.div 
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-1/4"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Box size={80} className="text-white/5 animate-pulse" />
                      </div>
                   </div>
                </div>

                <div className="absolute top-8 left-8 text-[8px] orbitron font-bold text-cyan-400/30 flex flex-col gap-1">
                  <span>CRC_CHECK_STABLE</span>
                  <span>BUFF_X_A00{i}</span>
                </div>
                <div className="absolute bottom-8 right-8 text-[8px] orbitron font-bold text-white/10">
                  SECURE_LAYER_V2.9
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <section className="mt-64 text-center glass p-20 lg:p-32 rounded-[100px] border border-white/5 relative overflow-hidden">
         <div className="relative z-10 space-y-12">
            <h2 className="orbitron text-5xl font-black text-white uppercase tracking-tighter">READY TO DEPLOY?</h2>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">Experience the precision of TechOl. We bridge the gap between complex engineering and exceptional user experiences.</p>
            <Link to="/contact" className="inline-block px-20 py-8 bg-white text-black font-black orbitron rounded-full text-sm tracking-[0.4em] hover:bg-cyan-400 transition-all shadow-xl active:scale-95">START DISCOVERY</Link>
         </div>
         <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-5" />
      </section>
    </div>
  );
};

export default Process;