
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Instagram, ArrowUpRight, Activity, Cpu, ArrowUp, Send } from 'lucide-react';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  const cursorX = useSpring(mouseX, { stiffness: 500, damping: 50 });
  const cursorY = useSpring(mouseY, { stiffness: 500, damping: 50 });

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
      className="fixed top-0 left-0 w-6 h-6 border border-cyan-400 rounded-full pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
    >
      <div className="absolute inset-1 bg-cyan-400/20 rounded-full blur-[2px]" />
    </motion.div>
  );
};

const SystemStatus = () => (
  <div className="fixed bottom-6 left-6 z-[60] hidden lg:flex items-center gap-4 px-5 py-2 glass rounded-full border-white/5 text-[9px] orbitron font-bold tracking-[0.3em] text-white/40 shadow-xl">
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      ACTIVE
    </div>
    <div className="w-px h-3 bg-white/10" />
    <div className="flex items-center gap-2">
      <Activity size={10} className="text-blue-500" />
      8MS
    </div>
    <div className="w-px h-3 bg-white/10" />
    <div className="hidden xl:block uppercase">
      NODE: APAC
    </div>
  </div>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Progress circle path length
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = window.scrollY / scrollHeight;
      setIsVisible(scrollPercentage > 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[70] w-14 h-14 glass rounded-full flex items-center justify-center text-cyan-400 border-white/10 shadow-[0_0_30px_rgba(0,242,255,0.15)] group"
        >
          {/* Progress Circle SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-1">
            <circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="rgba(0, 242, 255, 0.1)"
              strokeWidth="2"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="45%"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="0 1"
              style={{ pathLength }}
            />
          </svg>
          
          <ArrowUp size={20} className="relative z-10 transition-transform group-hover:-translate-y-1" />
          
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded-full text-[8px] orbitron font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none tracking-widest text-cyan-400 border-cyan-400/20">
            SCROLL_TOP
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Core', path: '/' },
    { name: 'Ledger', path: '/portfolio' },
    { name: 'Modules', path: '/services' },
    { name: 'Team', path: '/founder' },
    { name: 'Process', path: '/process' },
    { name: 'Access', path: '/pricing' },
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-[#020408]">
      <CustomCursor />
      <SystemStatus />
      <ScrollToTop />
      
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-cyan-400 z-[110] origin-left shadow-[0_0_10px_#00f2ff]"
        style={{ scaleX }}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-[#020408]/80 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6 lg:py-10'}`}
      >
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group relative z-[110]">
            <motion.div 
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="w-10 h-10 glass rounded-xl flex items-center justify-center border-cyan-500/20"
            >
              <Cpu size={20} className="text-cyan-400" />
            </motion.div>
            <div className="flex flex-col">
              <span className="orbitron text-xl lg:text-2xl font-black tracking-tighter text-white">TECHOL</span>
              <span className="text-[7px] orbitron font-black tracking-[0.4em] text-cyan-400/50 -mt-0.5">LABS_01</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`relative text-[10px] font-bold tracking-[0.3em] orbitron uppercase transition-all duration-300 ${location.pathname === link.path ? 'text-cyan-400' : 'text-white/40 hover:text-white'}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div layoutId="nav-dot" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                )}
              </Link>
            ))}
            <Link 
              to="/contact"
              className="px-8 py-3 bg-white text-black rounded-full text-[10px] font-black orbitron tracking-[0.2em] hover:bg-cyan-400 transition-all shadow-lg active:scale-95"
            >
              CONNECT
            </Link>
          </div>

          {/* Mobile Menu Toggle - Ensuring it's always on top */}
          <button 
            className="lg:hidden relative z-[120] w-12 h-12 glass rounded-2xl flex items-center justify-center text-cyan-400 border-white/10" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#020408] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <div className="grid-bg absolute inset-0 opacity-10 pointer-events-none" />
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  to={link.path}
                  className="text-4xl font-black orbitron uppercase tracking-tighter text-white/40 hover:text-cyan-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <Link 
                to="/contact" 
                className="px-12 py-5 bg-cyan-400 text-black orbitron font-black rounded-full uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(0,242,255,0.3)]"
                onClick={() => setIsMenuOpen(false)}
              >
                CONNECT
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24 lg:pt-0 relative z-10">
        {children}
      </main>

      <footer className="bg-[#020408] pt-40 pb-16 border-t border-white/5 relative overflow-hidden z-10">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-32 mb-20">
            <div className="md:col-span-6 space-y-8">
              <Link to="/" className="flex items-center gap-3">
                <Cpu size={24} className="text-cyan-400" />
                <span className="orbitron text-3xl font-black text-white tracking-tighter">TECHOL</span>
              </Link>
              <h3 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                FUTURE-PROOF <br /> <span className="text-cyan-400 italic">ARCHITECTURE.</span>
              </h3>
              <div className="flex gap-4">
                {[
                  { Icon: Twitter, href: "https://twitter.com/VihaanSankhla" },
                  { Icon: Instagram, href: "https://instagram.com/techol.in" },
                  { Icon: Github, href: "https://github.com" },
                  { Icon: Linkedin, href: "https://linkedin.com" }
                ].map((social, i) => (
                  <motion.a 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all group border border-white/5 hover:border-cyan-400/50"
                  >
                    <social.Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <h4 className="orbitron text-[10px] font-black text-cyan-400 uppercase tracking-widest">LINKS</h4>
              <ul className="space-y-4">
                {navLinks.map(l => (
                  <li key={l.path}><Link to={l.path} className="text-xs text-white/30 hover:text-white transition-colors orbitron uppercase tracking-widest block">{l.name}</Link></li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4 space-y-6">
              <h4 className="orbitron text-[10px] font-black text-cyan-400 uppercase tracking-widest">NEWSLETTER</h4>
              <p className="text-sm text-white/30 font-light">Join our pulse for monthly tech updates.</p>
              <div className="flex gap-2">
                <motion.div 
                  className="flex-grow relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <input 
                    type="email" 
                    placeholder="EMAIL" 
                    className="w-full glass px-6 py-4 rounded-2xl border-white/5 text-[10px] orbitron focus:outline-none focus:border-cyan-400 transition-all focus:bg-white/[0.05]" 
                  />
                </motion.div>
                <motion.button 
                  whileHover={{ scale: 1.1, backgroundColor: '#00f2ff', color: '#000' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center transition-all shadow-lg"
                >
                  <ArrowUpRight size={20} />
                </motion.button>
              </div>
            </div>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[9px] orbitron font-bold text-white/20 uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} TECHOL STUDIO
            </div>
            <div className="flex gap-8 text-[9px] orbitron font-bold text-white/20 uppercase tracking-[0.2em]">
              <Link to="/privacy" className="hover:text-cyan-400 transition-colors cursor-pointer">PRIVACY</Link>
              <Link to="/legal" className="hover:text-cyan-400 transition-colors cursor-pointer">LEGAL</Link>
              <span className="hover:text-cyan-400 transition-colors cursor-pointer">KOTA_INDIA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
