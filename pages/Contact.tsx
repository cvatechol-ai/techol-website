
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import AIAssistant from '../components/AIAssistant';

const FormField = ({ label, type = "text", placeholder, isTextArea = false, value, onChange }: { label: string, type?: string, placeholder: string, isTextArea?: boolean, value: string, onChange: (val: string) => void }) => {
  const [isFocused, setIsFocused] = useState(false);

  const isActive = isFocused || value.length > 0;
  const InputComponent = isTextArea ? 'textarea' : 'input';

  return (
    <div className="relative space-y-2 group">
      <motion.label 
        initial={false}
        animate={{
          y: isActive ? -28 : 0,
          scale: isActive ? 0.85 : 1,
          color: isFocused ? "#22d3ee" : isActive ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)",
          x: isActive ? -4 : 0
        }}
        className="absolute left-6 top-4 text-[10px] orbitron font-bold tracking-widest uppercase pointer-events-none origin-left z-20"
      >
        {label}
      </motion.label>
      
      <div className="relative">
        <AnimatePresence>
          {isFocused && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                boxShadow: ["0 0 10px rgba(0, 242, 255, 0.05)", "0 0 30px rgba(0, 242, 255, 0.25)", "0 0 10px rgba(0, 242, 255, 0.05)"]
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.3 }
              }}
              className="absolute inset-0 rounded-2xl bg-cyan-400/[0.04] pointer-events-none border border-cyan-400/30 z-0"
            />
          )}
        </AnimatePresence>

        <InputComponent
          type={type}
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full bg-white/[0.02] border rounded-2xl px-6 ${isTextArea ? 'py-6 h-32 resize-none' : 'py-4'} text-sm text-white placeholder-transparent focus:outline-none transition-all duration-500 relative z-10 ${isFocused ? 'border-transparent bg-transparent' : 'border-white/10'}`}
          placeholder={placeholder}
        />
        
        <AnimatePresence>
          {isFocused && value === "" && (
            <motion.span 
              initial={{ opacity: 0, x: 5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="absolute left-6 top-4 text-sm text-white/10 pointer-events-none z-10"
            >
              {placeholder}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Web Design & Strategy");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct Mailto Link
    const subject = `Project Brief: ${service} from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:cvatechol@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      <div className="text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          Let's Connect
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="orbitron text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight text-white"
        >
          Launch Your <span className="text-cyan-400">Vision</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-blue-100/50 text-lg"
        >
          We're excited to hear about your next digital adventure.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="orbitron text-3xl font-bold text-white">Direct Channels</h2>
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', val: 'cvatechol@gmail.com', desc: 'Response within 24h' },
                { icon: Phone, label: 'Phone', val: '+91 9549558023', desc: 'Mon - Sat, 10am - 6pm' },
                { icon: MapPin, label: 'Studio', val: 'Kota, Rajasthan, India', desc: 'Global Operations' }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-8 rounded-3xl border-white/5 flex gap-6 group hover:border-cyan-500/30 transition-all cursor-default"
                >
                  <div className="w-16 h-16 bg-blue-600/10 border border-blue-600/20 rounded-2xl flex items-center justify-center flex-shrink-0 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <motion.div
                      variants={{
                        hover: { 
                          rotate: [0, -10, 10, 0],
                          scale: 1.15,
                        }
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <item.icon size={28} />
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.3em] text-blue-100/40 uppercase mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-white mb-1">{item.val}</div>
                    <div className="text-xs text-blue-100/30 font-medium">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-[40px] border-white/5"
          >
            <h3 className="orbitron text-xl font-bold mb-6 text-white">Connect Socially</h3>
            <div className="grid grid-cols-2 gap-4">
              {['LinkedIn', 'Twitter', 'Instagram', 'Github'].map(platform => (
                <a key={platform} href="#" className="py-4 text-center glass border-white/10 rounded-2xl text-xs orbitron font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all">
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[48px] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="orbitron text-3xl font-bold mb-14 text-white">Send a Brief</h2>
                <form className="space-y-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <FormField label="Full Name" placeholder="e.g. John Doe" value={name} onChange={setName} />
                    <FormField label="Email Address" type="email" placeholder="e.g. john@example.com" value={email} onChange={setEmail} />
                  </div>
                  
                  <div className="relative space-y-2 group">
                    <label className="text-[10px] orbitron font-bold tracking-widest text-blue-100/40 uppercase">Desired Service</label>
                    <div className="relative">
                      <select 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500/50 transition-all text-sm text-white/70 appearance-none cursor-pointer"
                      >
                        <option className="bg-[#050810]">Web Design & Strategy</option>
                        <option className="bg-[#050810]">Core Engineering</option>
                        <option className="bg-[#050810]">Mobile Ecosystems</option>
                        <option className="bg-[#050810]">Neural/AI Consulting</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover:text-cyan-400 transition-colors">
                        ▼
                      </div>
                    </div>
                  </div>

                  <FormField label="Message Brief" placeholder="Tell us about your project objectives..." isTextArea={true} value={message} onChange={setMessage} />

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="w-full py-6 bg-cyan-500 hover:bg-cyan-400 text-black orbitron font-black uppercase tracking-[0.3em] rounded-2xl transition-all shadow-xl flex items-center justify-center gap-4 group"
                  >
                    Transmit Message 
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center space-y-8"
              >
                <div className="w-24 h-24 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto border border-cyan-500/20">
                  <CheckCircle2 size={48} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="orbitron text-3xl font-black text-white mb-4">OPENING MAIL CLIENT...</h3>
                  <p className="text-white/40 max-w-sm mx-auto">If your email client does not open automatically, please email us directly at cvatechol@gmail.com.</p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] orbitron font-bold text-cyan-400 uppercase tracking-[0.4em] hover:text-white transition-colors"
                >
                  Return to Terminal
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <section className="py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="text-center mb-16 pt-20">
          <div className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">The Smart Brief</div>
          <h2 className="orbitron text-4xl font-bold text-white">Interactive Project <span className="text-cyan-400">Scoping</span></h2>
        </div>
        <AIAssistant />
      </section>
    </div>
  );
};

export default Contact;
