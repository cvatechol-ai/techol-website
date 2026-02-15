import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Loader2, CheckCircle2, Terminal, Code, Cpu } from 'lucide-react';
import { generateProjectConsultation } from '../geminiService';

const AIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const data = await generateProjectConsultation(prompt);
      setResult(data);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-[48px] p-12 lg:p-16 max-w-6xl mx-auto border-cyan-500/10 shadow-[0_40px_100px_rgba(0,102,255,0.05)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-cyan-400 border-cyan-500/20">
            <Cpu className="animate-pulse" />
          </div>
          <div>
            <h3 className="orbitron text-2xl font-black text-white">Neural Consultant</h3>
            <div className="text-[10px] orbitron font-bold text-cyan-400/40 uppercase tracking-widest mt-1">Core AI Model: Gemini-Pro-Exp</div>
          </div>
        </div>
        {!result && (
          <div className="flex items-center gap-3 glass px-5 py-2 rounded-full border-white/5">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-status" />
            <span className="text-[10px] orbitron font-bold text-white/30 uppercase tracking-widest">Idle State</span>
          </div>
        )}
      </div>
      
      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-8 relative">
          <div className="space-y-4">
            <h4 className="orbitron text-[11px] font-black text-white/50 uppercase tracking-[0.4em]">Initialize Script</h4>
            <p className="text-white/30 text-lg font-light leading-relaxed">
              Describe your objective. Our neural core will synthesize a comprehensive architectural roadmap and technical stack recommendation.
            </p>
          </div>
          
          <div className="relative group">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Architect a high-frequency trading dashboard with real-time data visualization and biometric security..."
              className="w-full h-48 bg-white/[0.02] border border-white/10 rounded-[32px] p-8 text-white text-lg placeholder-white/10 focus:outline-none focus:border-cyan-500/30 transition-all resize-none shadow-inner"
            />
            <button
              disabled={loading || !prompt.trim()}
              className="absolute bottom-6 right-6 bg-white text-black px-8 py-4 rounded-2xl disabled:opacity-50 transition-all group shadow-2xl hover:bg-cyan-400 min-w-[160px]"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-3">
                  <motion.span 
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="orbitron text-[10px] font-black uppercase tracking-[0.2em]"
                  >
                    AI_THINKING
                  </motion.span>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity, 
                          delay: i * 0.2 
                        }}
                        className="w-1 h-1 bg-black rounded-full"
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="orbitron text-[10px] font-black uppercase tracking-widest">Synthesize</span>
                  <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              )}
            </button>
          </div>
          
          <div className="flex gap-4 opacity-20">
            <Terminal size={14} />
            <div className="w-full h-[1px] bg-white/10 self-center" />
          </div>
        </form>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="p-8 glass bg-cyan-400/[0.03] rounded-[32px] border border-cyan-500/10">
            <div className="text-[9px] orbitron font-bold text-cyan-400/40 uppercase mb-3 tracking-widest">Parsed Objective:</div>
            <p className="text-cyan-100 text-lg italic font-light leading-relaxed">"{prompt}"</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div className="space-y-5">
                <h4 className="orbitron text-[11px] font-black text-white uppercase tracking-[0.4em] flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-cyan-400" />
                  Executive Synthesis
                </h4>
                <p className="text-white/40 text-lg leading-relaxed font-light">{result.summary}</p>
              </div>
              
              <div className="space-y-6">
                <h4 className="orbitron text-[11px] font-black text-white uppercase tracking-[0.4em] flex items-center gap-3">
                  <Code size={16} className="text-blue-500" />
                  Recommended Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {result.techStack.map((tech: string, i: number) => (
                    <span key={i} className="px-5 py-2 glass border-white/10 rounded-full text-[10px] orbitron font-black text-cyan-400/80 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h4 className="orbitron text-[11px] font-black text-white uppercase tracking-[0.4em] flex items-center gap-3">
                <Terminal size={16} className="text-cyan-400" />
                Execution Phases
              </h4>
              <div className="space-y-8">
                {result.phases.map((phase: any, i: number) => (
                  <div key={i} className="relative pl-10">
                    <div className="absolute left-0 top-1.5 w-4 h-4 glass border-cyan-500/30 rounded-full flex items-center justify-center">
                       <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                    </div>
                    <div className="absolute left-[7.5px] top-6 w-[1px] h-[calc(100%-10px)] bg-white/5" />
                    <h5 className="text-lg font-black orbitron text-white mb-3 tracking-tight">{phase.title}</h5>
                    <ul className="space-y-2">
                      {phase.tasks.map((task: string, j: number) => (
                        <li key={j} className="text-sm text-white/30 font-light flex items-center gap-3">
                          <span className="text-cyan-400/30">―</span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="pt-10 border-t border-white/5 flex justify-between items-center">
                <span className="text-[10px] orbitron font-bold text-white/20 uppercase tracking-[0.4em]">Est. Deployment</span>
                <span className="text-xl orbitron text-cyan-400 font-black tracking-tighter">{result.estimatedTimeline}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => {setResult(null); setPrompt('');}}
            className="w-full py-6 glass border-white/5 rounded-3xl hover:bg-white/[0.03] transition-all text-[10px] orbitron font-black uppercase tracking-[0.5em] text-white/30 hover:text-cyan-400"
          >
            Terminal Reset / New Sync
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default AIAssistant;