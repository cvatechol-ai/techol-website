
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Cpu, Code, Layers, Zap, Database, Globe, Radio, Activity, Terminal, Shield, Server, Box, GitBranch, Lock, Wifi, Disc, BarChart3, Layout, Network, Quote, User, Smartphone, Cloud, Fingerprint, Hexagon, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TECH_STACK, TESTIMONIALS } from '../constants';

// --- VISUAL ENGINES ---

const NeuralCore = () => {
  return (
    <div className="neural-scene w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full animate-pulse" />
      {/* Orbital Ring */}
      <div className="absolute inset-0 border border-cyan-400/20 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute inset-4 border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      
      <div className="tesseract-wrapper">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
        <div className="cube cube-inner">
          <div className="face face-inner in-front"></div>
          <div className="face face-inner in-back"></div>
          <div className="face face-inner in-right"></div>
          <div className="face face-inner in-left"></div>
          <div className="face face-inner in-top"></div>
          <div className="face face-inner in-bottom"></div>
        </div>
      </div>
    </div>
  );
};

const CyberGridBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden perspective-container">
    <div className="moving-grid opacity-20" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-[#020408] z-10" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-transparent to-transparent z-10" />
  </div>
);

const MouseTracker = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        left: springX,
        top: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed w-[800px] h-[800px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none z-0 mix-blend-screen opacity-50 hidden lg:block"
    />
  );
};

// --- DATA COMPONENTS ---

const FloatingTerminal = ({ top, left, right, bottom, title, lines, delay = 0 }: { top?: string, left?: string, right?: string, bottom?: string, title: string, lines: string[], delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="absolute hidden xl:block z-20 w-64 glass bg-black/40 rounded-lg border border-white/5 overflow-hidden backdrop-blur-md shadow-2xl"
    style={{ top, left, right, bottom }}
  >
    <div className="bg-white/5 px-3 py-1.5 flex items-center justify-between border-b border-white/5">
      <div className="text-[9px] orbitron font-bold text-white/40">{title}</div>
      <div className="flex gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
      </div>
    </div>
    <div className="p-3 font-mono text-[9px] text-cyan-400/80 space-y-1">
      {lines.map((line, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: delay + i * 1.5, repeat: Infinity, repeatDelay: 5 }}
        >
          {'>'} {line}
        </motion.div>
      ))}
      <div className="w-2 h-4 bg-cyan-400 animate-pulse inline-block align-middle" />
    </div>
  </motion.div>
);

const DigitalDNA = () => {
  return (
    <div className="flex gap-4 items-center justify-center h-40 opacity-30">
       {[...Array(20)].map((_, i) => (
         <div key={i} className="flex flex-col gap-8">
           <motion.div
             animate={{ y: [0, 20, 0], scale: [1, 0.8, 1], opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
             className="w-2 h-2 rounded-full bg-cyan-400"
           />
           <motion.div
             animate={{ y: [0, -20, 0], scale: [1, 0.8, 1], opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
             className="w-2 h-2 rounded-full bg-blue-500"
           />
         </div>
       ))}
    </div>
  );
};

const SecurityShield = () => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center">
       <motion.div 
         animate={{ rotate: 360 }}
         transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
         className="absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-full"
       />
       <motion.div 
         animate={{ rotate: -360 }}
         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
         className="absolute inset-4 border border-white/10 rounded-full"
       />
       <Shield size={64} className="text-cyan-400 relative z-10" />
       <div className="absolute inset-0 radar-sweep opacity-50" />
    </div>
  );
};

const SystemArchitecture = () => {
  return (
    <div className="relative w-full aspect-[16/9] glass-panel rounded-[32px] overflow-hidden p-8 border border-white/10 flex items-center justify-center bg-[#020408]/80">
      <div className="absolute inset-0 hex-bg opacity-10" />
      
      {/* SVG Diagram */}
      <svg viewBox="0 0 800 400" className="w-full h-full relative z-10">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 242, 255, 0.1)" />
            <stop offset="50%" stopColor="rgba(0, 242, 255, 0.5)" />
            <stop offset="100%" stopColor="rgba(0, 242, 255, 0.1)" />
          </linearGradient>
        </defs>

        {/* Nodes */}
        {/* User Node */}
        <g transform="translate(80, 200)">
          <circle r="30" fill="rgba(0,0,0,0.5)" stroke="#00f2ff" strokeWidth="2" />
          <foreignObject x="-12" y="-12" width="24" height="24">
             <div className="text-cyan-400"><Smartphone size={24} /></div>
          </foreignObject>
          <text y="45" textAnchor="middle" fill="white" fontSize="10" fontFamily="Orbitron" letterSpacing="2">USER</text>
        </g>

        {/* CDN Node */}
        <g transform="translate(240, 200)">
          <rect x="-30" y="-30" width="60" height="60" rx="10" fill="rgba(0,0,0,0.5)" stroke="#00f2ff" strokeWidth="2" strokeDasharray="5,5" />
          <foreignObject x="-16" y="-16" width="32" height="32">
             <div className="text-purple-400"><Globe size={32} /></div>
          </foreignObject>
          <text y="50" textAnchor="middle" fill="white" fontSize="10" fontFamily="Orbitron" letterSpacing="2">CDN_EDGE</text>
        </g>

        {/* Load Balancer */}
         <g transform="translate(400, 200)">
          <polygon points="0,-30 30,0 0,30 -30,0" fill="rgba(0,0,0,0.5)" stroke="#22c55e" strokeWidth="2" />
          <foreignObject x="-12" y="-12" width="24" height="24">
             <div className="text-green-400"><Network size={24} /></div>
          </foreignObject>
          <text y="50" textAnchor="middle" fill="white" fontSize="10" fontFamily="Orbitron" letterSpacing="2">BALANCER</text>
        </g>

        {/* Server Node */}
        <g transform="translate(560, 200)">
          <rect x="-30" y="-40" width="60" height="80" rx="5" fill="rgba(0,0,0,0.5)" stroke="#00f2ff" strokeWidth="2" />
           <foreignObject x="-12" y="-12" width="24" height="24">
             <div className="text-blue-400"><Server size={24} /></div>
          </foreignObject>
          <text y="60" textAnchor="middle" fill="white" fontSize="10" fontFamily="Orbitron" letterSpacing="2">API_CLUSTER</text>
        </g>

        {/* DB Node */}
        <g transform="translate(720, 200)">
           <path d="M-25,-35 C-25,-45 25,-45 25,-35 L25,35 C25,45 -25,45 -25,35 Z" fill="rgba(0,0,0,0.5)" stroke="#f59e0b" strokeWidth="2" />
           <path d="M-25,-15 C-25,-5 25,-5 25,-15" stroke="#f59e0b" fill="none" />
           <path d="M-25,10 C-25,20 25,20 25,10" stroke="#f59e0b" fill="none" />
           <foreignObject x="-12" y="-12" width="24" height="24">
             <div className="text-orange-400"><Database size={24} /></div>
          </foreignObject>
          <text y="60" textAnchor="middle" fill="white" fontSize="10" fontFamily="Orbitron" letterSpacing="2">SHARD_DB</text>
        </g>

        {/* Connecting Lines */}
        <path d="M 110 200 L 210 200" stroke="url(#lineGrad)" strokeWidth="2" />
        <path d="M 270 200 L 370 200" stroke="url(#lineGrad)" strokeWidth="2" />
        <path d="M 430 200 L 530 200" stroke="url(#lineGrad)" strokeWidth="2" />
        <path d="M 590 200 L 695 200" stroke="url(#lineGrad)" strokeWidth="2" />

        {/* Animated Packets */}
        <motion.circle r="4" fill="#fff"
          animate={{ cx: [110, 695], opacity: [1, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          cy="200"
        />
        <motion.circle r="4" fill="#00f2ff"
          animate={{ cx: [695, 110], opacity: [0, 1, 1] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
          cy="200"
        />
      </svg>
    </div>
  );
};

const LiveTelemetry = () => {
  const [latency, setLatency] = useState(12);
  const [requests, setRequests] = useState(1402);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => Math.max(8, Math.min(24, prev + (Math.random() - 0.5) * 4)));
      setRequests(prev => prev + Math.floor(Math.random() * 50));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#020408]/90 backdrop-blur-md border-t border-white/5 px-6 py-2 z-[60] flex items-center justify-between text-[10px] orbitron font-bold text-white/30 tracking-widest hidden lg:flex">
      <div className="flex gap-8">
        <div className="flex items-center gap-2">
          <Activity size={12} className="text-cyan-400" />
          <span>LATENCY: {latency.toFixed(1)}MS</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={12} className="text-blue-500" />
          <span>REQ/SEC: {requests}</span>
        </div>
        <div className="flex items-center gap-2">
          <Shield size={12} className="text-green-500" />
          <span>SECURITY: ENCRYPTED_AES256</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span>REGION: AP_SOUTH_1</span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>
    </div>
  );
};

const NetworkMap = () => {
  return (
    <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] glass-panel rounded-[32px] overflow-hidden p-8 border border-white/10">
      <div className="absolute inset-0 bg-[#020408]/80 z-0" />
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        {/* Abstract World Map Grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-10">
           {[...Array(72)].map((_, i) => (
             <div key={i} className="border border-cyan-400/30 rounded-sm" />
           ))}
        </div>
        
        {/* Nodes */}
        {[
          { x: '20%', y: '30%', label: 'US-WEST' },
          { x: '25%', y: '40%', label: 'US-EAST' },
          { x: '48%', y: '25%', label: 'EU-CENTRAL' },
          { x: '70%', y: '50%', label: 'AP-SOUTH' },
          { x: '85%', y: '35%', label: 'AP-NORTHEAST' }
        ].map((node, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="absolute flex flex-col items-center"
            style={{ left: node.x, top: node.y }}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute inset-0 opacity-75" />
              <div className="w-3 h-3 bg-cyan-400 rounded-full relative z-10 shadow-[0_0_15px_#00f2ff]" />
            </div>
            <div className="mt-2 text-[8px] orbitron font-black text-cyan-400/80 tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-cyan-400/20">
              {node.label}
            </div>
          </motion.div>
        ))}

        {/* Connecting Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
          <motion.path
            d="M 20% 30% Q 34% 10% 48% 25%"
            fill="none"
            stroke="#00f2ff"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M 48% 25% Q 60% 60% 70% 50%"
            fill="none"
            stroke="#00f2ff"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
           <motion.path
            d="M 25% 40% Q 55% 45% 70% 50%"
            fill="none"
            stroke="#00f2ff"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </div>
      
      <div className="absolute top-6 left-6 z-20">
        <div className="text-[10px] orbitron font-black text-cyan-400 uppercase tracking-widest flex items-center gap-2">
          <Globe size={14} /> Global Edge Network
        </div>
        <div className="text-xs text-white/40 mt-1 font-mono">Active Nodes: 24 | Traffic: Optimal</div>
      </div>
    </div>
  );
};

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      className="inline-block"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: delay + i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const MarqueeRow = ({ direction = "rtl", items }: { direction?: "ltr" | "rtl", items: string[] }) => {
  const content = [...items, ...items, ...items];
  const animationClass = direction === "ltr" ? "animate-marquee-rev" : "animate-marquee";
  
  return (
    <div className="relative py-8 border-y border-white/5 bg-white/[0.01] marquee-mask backdrop-blur-sm overflow-hidden">
      <div className={`marquee-container ${animationClass}`}>
        {content.map((item, i) => (
          <div key={i} className="px-16 flex items-center gap-4 group">
            <Box size={16} className="text-cyan-400/30 group-hover:text-cyan-400 transition-colors" />
            <span className="orbitron text-sm font-bold text-white/20 tracking-[0.4em] uppercase transition-colors group-hover:text-cyan-400/80 cursor-default whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Card3D: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

const Home: React.FC = () => {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

  const capabilities = [
    { title: "Quantum UI", desc: "Interfaces that adapt to user behavior in real-time.", icon: Layout },
    { title: "Neural Backend", desc: "Self-healing server architectures built on Node.js.", icon: Database },
    { title: "Edge Security", desc: "Military-grade encryption for every data packet.", icon: Lock },
    { title: "Global Sync", desc: "Sub-20ms latency across 5 continents.", icon: Network },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020408]">
      <div className="noise-overlay" />
      <div className="scanline" />
      <MouseTracker />
      <CyberGridBackground />
      <LiveTelemetry />

      {/* --- HERO SECTION: COMMAND CENTER --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        
        {/* HERO HUD WIDGETS */}
        <div className="absolute top-32 right-12 hidden 2xl:flex flex-col gap-4 z-20">
           <motion.div 
             initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }}
             className="glass px-4 py-3 rounded-xl border-white/5 w-64"
           >
             <div className="text-[9px] orbitron font-bold text-cyan-400 mb-2 flex justify-between">
               <span>MEMORY_HEAP</span>
               <span>34%</span>
             </div>
             <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div animate={{ width: ["30%", "60%", "40%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-cyan-400" />
             </div>
           </motion.div>
           <motion.div 
             initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.2 }}
             className="glass px-4 py-3 rounded-xl border-white/5 w-64"
           >
             <div className="text-[9px] orbitron font-bold text-green-400 mb-2 flex justify-between">
               <span>THREAT_LEVEL</span>
               <span>ZERO</span>
             </div>
             <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
               <motion.div className="h-full w-2 bg-green-400" />
             </div>
           </motion.div>
        </div>

        {/* Floating Terminals for Density */}
        <FloatingTerminal 
          top="20%" left="5%" 
          title="DEPLOY_LOGS" 
          lines={["Initializing Pods...", "Scale Up: Success", "Traffic: 400req/s"]} 
        />
        <FloatingTerminal 
          bottom="25%" right="8%" 
          title="SEC_AUDIT" 
          lines={["Scanning Ports...", "Firewall: Active", "Threat Level: 0"]} 
          delay={2}
        />

        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          
          {/* Left: Text Command */}
          <motion.div style={{ y: yHero, opacity: opacityHero }} className="space-y-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border-cyan-400/30 shadow-[0_0_30px_rgba(0,242,255,0.15)]">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00f2ff]" />
              <span className="orbitron text-[9px] font-black tracking-[0.4em] text-cyan-400 uppercase">SYSTEM: ONLINE</span>
            </div>

            <h1 className="orbitron text-fluid-lg font-black tracking-tighter text-white uppercase leading-[0.85]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/20">DIGITAL</span>
              <span className="block text-cyan-400 text-glow italic">EVOLUTION.</span>
            </h1>

            <p className="text-blue-100/50 text-xl lg:text-2xl font-light leading-relaxed max-w-2xl border-l-2 border-cyan-400/30 pl-8">
              <TypewriterText text="We are the architects of the new internet. Synthesizing advanced logic with cinematic fidelity to build systems that dominate." delay={0.5} />
            </p>

            <div className="flex flex-wrap gap-8">
              <Link 
                to="/contact" 
                className="group relative px-12 py-6 bg-cyan-400 text-black font-black orbitron text-sm tracking-[0.3em] rounded-sm overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(0,242,255,0.4)] clip-path-slant"
              >
                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 mix-blend-difference" />
                <span className="relative z-10 flex items-center gap-3">
                  INITIALIZE <Zap size={16} fill="currentColor" />
                </span>
              </Link>
              
              <Link to="/portfolio" className="group flex items-center gap-4 px-10 py-6 glass rounded-sm text-sm orbitron font-bold tracking-[0.3em] text-white hover:border-cyan-400/50 transition-all">
                ACCESS_LOGS <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform text-cyan-400" />
              </Link>
            </div>
            
            <div className="flex gap-12 pt-8 border-t border-white/5">
              {[
                { label: "Uptime", val: "99.99%" },
                { label: "Projects", val: "140+" },
                { label: "Awards", val: "12" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="orbitron text-3xl font-black text-white">{stat.val}</div>
                  <div className="text-[9px] orbitron font-bold text-white/30 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: The Neural Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex items-center justify-center relative"
          >
            <NeuralCore />
            
            {/* Floating Data Points */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-10 glass px-6 py-4 rounded-xl border-cyan-400/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <Cpu size={16} className="text-cyan-400" />
                <span className="text-[9px] orbitron font-bold text-white/50 tracking-widest">CPU_LOAD</span>
              </div>
              <div className="text-2xl orbitron font-black text-white">12%</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 glass px-6 py-4 rounded-xl border-purple-500/20 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <GitBranch size={16} className="text-purple-400" />
                <span className="text-[9px] orbitron font-bold text-white/50 tracking-widest">DEPLOY</span>
              </div>
              <div className="text-2xl orbitron font-black text-white">STABLE</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- DNA SEQUENCE STRIP --- */}
      <section className="py-20 border-y border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 hex-bg opacity-20" />
         <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6">
            <div className="flex items-center gap-8">
              <Fingerprint size={32} className="text-cyan-400" />
              <div>
                <h3 className="orbitron text-xl font-black text-white uppercase">Genetic Code</h3>
                <p className="text-[10px] orbitron tracking-widest text-white/40">ALGORITHMIC PERFECTION</p>
              </div>
            </div>
            <div className="hidden lg:block w-1/2">
               <DigitalDNA />
            </div>
         </div>
      </section>

      {/* --- MARQUEE --- */}
      <section className="relative z-30 space-y-0 bg-[#020408]">
        <MarqueeRow items={["Strategic Design", "Cloud Architecture", "Neural Networks", "Blockchain Integration", "Cyber Security"]} direction="ltr" />
        <MarqueeRow items={["React Native", "Next.js Enterprise", "Three.js WebGL", "Python AI/ML", "Rust Systems"]} direction="rtl" />
      </section>

      {/* --- GLOBAL TELEMETRY SECTION --- */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 relative z-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
            <div className="lg:w-1/3 space-y-10">
               <div className="inline-flex items-center gap-3 text-cyan-400 text-[10px] orbitron font-black tracking-[0.5em] uppercase">
                <Globe size={16} /> Global Infrastructure
              </div>
              <h2 className="orbitron text-4xl lg:text-6xl font-black text-white uppercase leading-tight tracking-tight">
                Planet-Scale <br /> <span className="text-cyan-400">Delivery.</span>
              </h2>
              <p className="text-blue-100/50 text-lg leading-relaxed">
                Our architecture isn't just code; it's a global nervous system. We deploy edge-computing nodes that ensure your application feels instant, regardless of where your user is located.
              </p>
              
              <div className="space-y-6 pt-6">
                <div className="glass p-6 rounded-2xl border-white/5 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black orbitron text-white">20ms</div>
                    <div className="text-[9px] font-bold tracking-widest text-white/30 uppercase">Global Latency Cap</div>
                  </div>
                </div>
                 <div className="glass p-6 rounded-2xl border-white/5 flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-purple-400/10 flex items-center justify-center text-purple-400">
                    <Shield size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-black orbitron text-white">Zero</div>
                    <div className="text-[9px] font-bold tracking-widest text-white/30 uppercase">Breach Tolerance</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              <NetworkMap />
              <SystemArchitecture />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECURITY FORTRESS --- */}
      <section className="py-32 relative border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="order-2 lg:order-1 flex justify-center">
              <SecurityShield />
           </div>
           <div className="order-1 lg:order-2 space-y-8">
             <div className="text-cyan-400 text-[10px] orbitron font-black tracking-[0.5em] uppercase flex items-center gap-3">
               <Lock size={16} /> Fortress Protocol
             </div>
             <h2 className="orbitron text-5xl font-black text-white uppercase leading-none">
               Impenetrable <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Defense.</span>
             </h2>
             <p className="text-white/40 text-lg leading-relaxed">
               We don't just patch vulnerabilities; we anticipate them. Our systems are wrapped in layers of biometric authentication, AI-driven threat detection, and real-time encryption.
             </p>
             <div className="grid grid-cols-2 gap-4">
               {['End-to-End Encryption', '2FA Integration', 'DDOS Mitigation', 'Penetration Testing'].map((s,i) => (
                 <div key={i} className="flex items-center gap-3 text-xs orbitron font-bold text-white/60">
                   <Hexagon size={12} className="text-cyan-400" /> {s}
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-32 px-6 lg:px-12 relative z-20 bg-gradient-to-b from-[#020408] to-[#050810]">
         <div className="max-w-[1600px] mx-auto">
            <div className="text-center mb-24 space-y-6">
              <h2 className="orbitron text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter">
                Core <span className="text-cyan-400 italic">Modules.</span>
              </h2>
              <p className="text-white/30 max-w-2xl mx-auto">
                We dissect complex problems and assemble solutions using four proprietary pillars of engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((cap, i) => (
                <Card3D key={i} className="h-full">
                  <div className="glass-panel p-10 rounded-[40px] border border-white/5 hover:border-cyan-400/30 transition-all group h-full flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-cyan-400 group-hover:text-black transition-all mb-8">
                      <cap.icon size={32} />
                    </div>
                    <h3 className="orbitron text-xl font-bold text-white mb-4 uppercase">{cap.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed flex-grow">{cap.desc}</p>
                    
                    <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[9px] orbitron font-bold text-cyan-400 uppercase tracking-widest">Explore</span>
                      <ArrowRight size={14} className="text-cyan-400" />
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
         </div>
      </section>

      {/* --- CODE ANATOMY: THE DIFF ENGINE --- */}
      <section className="py-32 px-6 lg:px-12 relative z-20 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-12">
               <div className="inline-flex items-center gap-3 text-purple-400 text-[10px] orbitron font-black tracking-[0.5em] uppercase">
                <Code size={16} /> Code Hygiene
              </div>
              <h2 className="orbitron text-4xl lg:text-6xl font-black text-white uppercase leading-none">
                Not Just Code. <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Poetry.</span>
              </h2>
              <p className="text-lg text-white/50 leading-relaxed">
                We believe that the quality of the underlying code directly correlates to the longevity of the product. We write strict, typed, and modular systems that scale without technical debt.
              </p>
              
              <ul className="space-y-4">
                {['Strict TypeScript Enforcement', 'Component Atomic Design', 'Server-Side Rendering (SSR)', 'Automated CI/CD Pipelines'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/70">
                    <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    </div>
                    <span className="text-sm orbitron font-bold tracking-widest uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full max-w-2xl perspective-container">
              <motion.div 
                initial={{ rotateY: 15, rotateX: 5 }}
                whileInView={{ rotateY: -5, rotateX: 0 }}
                transition={{ duration: 1.5 }}
                className="glass rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              >
                <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="text-[10px] orbitron text-white/30 uppercase tracking-widest">Core_Optimizer.ts</div>
                </div>
                <div className="p-8 font-mono text-xs lg:text-sm text-blue-200/60 leading-relaxed overflow-x-auto">
                  <div className="opacity-50 line-through mb-4">
                    <span className="text-red-400">- const fetchUser = (id) ={'>'} fetch(`/api/user/${'{id}'}`).then(res ={'>'} res.json());</span>
                  </div>
                  <div className="pl-4 border-l-2 border-green-500/50">
                    <div><span className="text-purple-400">export const</span> <span className="text-yellow-200">useUserQuery</span> = (id: <span className="text-green-300">string</span>) ={'>'} {`{`}</div>
                    <div className="pl-4"><span className="text-blue-400">return</span> <span className="text-yellow-200">useQuery</span>({`{`}</div>
                    <div className="pl-8">queryKey: [<span className="text-green-300">'user'</span>, id],</div>
                    <div className="pl-8">queryFn: <span className="text-blue-400">async</span> () ={'>'} {`{`}</div>
                    <div className="pl-12"><span className="text-blue-400">const</span> {`{ data }`} = <span className="text-blue-400">await</span> apiClient.get{`<User>`}(<span className="text-green-300">`/users/${'{id}'}`</span>);</div>
                    <div className="pl-12"><span className="text-blue-400">return</span> UserSchema.parse(data);</div>
                    <div className="pl-8">{`}`},</div>
                    <div className="pl-8">staleTime: <span className="text-orange-400">1000</span> * <span className="text-orange-400">60</span>, <span className="text-gray-500">// 1 min cache</span></div>
                    <div className="pl-4">{`}`});</div>
                    <div>{`}`};</div>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-green-400 font-bold">
                    <Zap size={14} /> <span>+400% Type Safety Efficiency</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK CAROUSEL --- */}
      <section className="py-24 border-y border-white/5 bg-[#020408]">
        <div className="text-center mb-16">
          <h3 className="orbitron text-xl font-bold text-white/50 uppercase tracking-[0.5em]">Powered By</h3>
        </div>
        <div className="relative overflow-hidden w-full">
            <div className="flex gap-12 w-max animate-marquee">
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <div key={i} className="flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <div className="text-5xl">{tech.name === 'React' ? <Zap /> : tech.name === 'Next.js' ? <Layers /> : <Box />}</div>
                  <span className="text-[10px] orbitron font-bold uppercase tracking-widest">{tech.name}</span>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* --- HOLOGRAPHIC TESTIMONIALS --- */}
      <section className="py-32 overflow-hidden relative">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="mb-20 flex items-end justify-between">
            <div>
              <div className="text-cyan-400 text-[10px] orbitron font-bold tracking-[0.4em] mb-4">SOCIAL PROOF</div>
              <h2 className="orbitron text-5xl font-black text-white uppercase">Client <span className="text-cyan-400">Ledger</span></h2>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-20 hide-scrollbar snap-x p-4">
             {TESTIMONIALS.map((t, i) => (
               <Card3D key={i} className="min-w-[400px]">
                 <div 
                   className="glass p-10 rounded-[40px] border border-white/5 snap-center relative overflow-hidden group hover:border-cyan-400/30 transition-all h-full"
                 >
                   <Quote size={48} className="text-white/5 absolute top-6 right-8" />
                   <p className="text-lg text-white/60 italic leading-relaxed mb-8 relative z-10">"{t.content}"</p>
                   <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold orbitron">
                       {t.avatar}
                     </div>
                     <div>
                       <div className="text-white font-bold orbitron">{t.author}</div>
                       <div className="text-xs text-white/30 uppercase tracking-wider">{t.role}</div>
                     </div>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
               </Card3D>
             ))}
          </div>
        </div>
      </section>

      {/* --- CTA: FINAL ASCENSION --- */}
      <section className="py-48 px-6 text-center relative overflow-hidden">
        {/* Warp speed effect */}
        <div className="absolute inset-0 pointer-events-none">
           {[...Array(20)].map((_, i) => (
             <motion.div
               key={i}
               animate={{ 
                 y: ["-100%", "200%"],
                 opacity: [0, 1, 0]
               }}
               transition={{ 
                 duration: Math.random() * 2 + 1, 
                 repeat: Infinity, 
                 delay: Math.random() * 2,
                 ease: "linear"
               }}
               className="absolute w-[1px] h-32 bg-cyan-400/30"
               style={{ left: `${Math.random() * 100}%` }}
             />
           ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto space-y-12"
        >
          <h2 className="orbitron text-6xl lg:text-9xl font-black text-white uppercase leading-none tracking-tighter">
            Initialize <br /> <span className="text-cyan-400 text-glow">Protocol.</span>
          </h2>
          <p className="text-xl text-white/40 max-w-2xl mx-auto">
            Ready to upgrade your digital infrastructure? The uplink is open.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <Link 
              to="/contact" 
              className="px-20 py-8 bg-cyan-400 hover:bg-white text-black font-black orbitron text-xl tracking-[0.4em] rounded-full transition-all shadow-[0_0_80px_rgba(0,242,255,0.4)] hover:shadow-[0_0_100px_rgba(255,255,255,0.6)] uppercase"
            >
              Start Project
            </Link>
            <div className="text-[9px] orbitron font-bold text-white/20 uppercase tracking-[0.8em] animate-pulse">
              System Awaiting Input...
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
