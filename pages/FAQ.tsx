
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-24">
        <div className="text-cyan-400 text-[10px] font-black orbitron tracking-[0.6em] uppercase mb-8">Support</div>
        <h1 className="orbitron text-5xl md:text-7xl font-black uppercase mb-8">INTELLIGENCE <span className="text-cyan-400">HUB.</span></h1>
        <p className="text-white/40 font-light">Frequently asked questions and technical clarifications.</p>
      </div>

      <div className="space-y-6">
        {FAQS.map((faq, i) => (
          <div key={i} className="glass rounded-[32px] border-white/5 overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-10 py-8 flex items-center justify-between hover:bg-white/5 transition-all text-left"
            >
              <span className="orbitron text-lg font-bold text-white pr-8">{faq.question}</span>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-cyan-400">
                {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-10 pb-10 pt-2 text-white/50 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center p-12 glass rounded-[40px] border-cyan-500/10">
        <h3 className="orbitron text-xl font-bold mb-4 text-white">Still Have Questions?</h3>
        <p className="text-white/40 text-sm mb-8">Our advisors are ready to assist you in real-time.</p>
        <a href="mailto:cvatechol@gmail.com" className="px-12 py-5 bg-white text-black orbitron font-black rounded-full text-[10px] tracking-widest hover:bg-cyan-400 transition-colors">Contact Support</a>
      </div>
    </div>
  );
};

export default FAQ;
