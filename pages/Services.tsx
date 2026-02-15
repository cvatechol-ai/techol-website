import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SERVICES } from '../constants';
import { Service } from '../types';
import AIAssistant from '../components/AIAssistant';
import { Fingerprint, Binary, ChevronRight, Cpu } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative glass rounded-[48px] p-10 lg:p-14 border border-white/5 group transition-all duration-500 shadow-2xl overflow-hidden"
    >
      <div style={{ transform: "translateZ(75px)" }} className="relative z-10">
        {/* Pulsing Icon Animation */}
        <motion.div 
          className="text-7xl mb-12 inline-block cursor-pointer"
          whileHover={{ 
            scale: 1.2,
            rotate: [0, 5, -5, 0],
            filter: "drop-shadow(0 0 20px rgba(0, 242, 255, 0.6))"
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 0.5 }
          }}
        >
          {service.icon}
        </motion.div>
        
        <h3 className="orbitron text-3xl font-black mb-6 text-white tracking-tighter group-hover:text-cyan-400 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-white/40 text-base leading-relaxed mb-12 h-24 overflow-hidden font-light">
          {service.description}
        </p>
        
        <div className="space-y-4 mb-14">
          <div className="text-[10px] font-black tracking-[0.4em] text-cyan-400/50 uppercase mb-6 flex items-center gap-3">
            <Binary size={12} />
            Execution Modules
          </div>
          <div className="grid gap-3">
            {service.features.map((feat: string, j: number) => (
              <motion.div 
                key={j} 
                whileHover={{ x: 10, color: '#fff' }}
                className="flex items-center gap-4 text-sm text-white/40 group/feat cursor-default transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_10px_#00f2ff]" />
                <span>{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[9px] text-white/20 font-bold uppercase tracking-widest">Investment</span>
            <span className="orbitron text-sm text-cyan-400 font-black tracking-widest mt-1">{service.priceRange}</span>
          </div>
          <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/20 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition-all">
            <ChevronRight size={18} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#020408] mesh-gradient overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="grid-bg absolute inset-0 opacity-10" />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-16 pt-48 pb-32">
        <header className="max-w-4xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-cyan-400 text-[11px] font-black orbitron tracking-[0.8em] uppercase mb-10 flex items-center gap-4"
          >
            <Fingerprint size={16} />
            Capability Ledger v.4.0
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="orbitron text-fluid-md font-black mb-12 uppercase leading-[0.9] tracking-tighter text-white"
          >
            ENGINEERING <br /> <span className="text-cyan-400 italic">DOMINANCE.</span>
          </motion.h1>
          <p className="text-white/40 text-xl lg:text-3xl font-light leading-relaxed max-w-3xl">
            We deploy advanced architectural patterns to synthesize digital products that outperform and redefine market standards.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 mb-48">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <section className="relative pt-32 lg:pt-48 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-4 space-y-10">
              <div className="text-cyan-400 text-[10px] orbitron font-black tracking-[0.5em] uppercase">AI Node</div>
              <h2 className="orbitron text-4xl lg:text-5xl font-black text-white leading-tight uppercase">
                ARCHITECT <br /> YOUR <span className="text-cyan-400">VISION.</span>
              </h2>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-cyan-400">
                  <Cpu size={24} className="animate-pulse" />
                </div>
                <div className="text-[9px] orbitron font-bold text-white/20 uppercase tracking-widest">Gemini-Pro Sync <br /> Active & Encrypted</div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <AIAssistant />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;