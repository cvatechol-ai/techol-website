
import React from 'react';
import { Shield, Lock, Eye } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
      <div className="mb-20">
        <div className="text-cyan-400 text-[10px] font-black orbitron tracking-[0.4em] uppercase mb-6">Legal Protocol</div>
        <h1 className="orbitron text-5xl font-black text-white uppercase mb-8">Privacy <span className="text-cyan-400">Policy.</span></h1>
        <p className="text-white/40 text-lg">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-16">
        <section className="glass p-10 rounded-[40px] border-white/5 space-y-6">
           <div className="flex items-center gap-4 text-cyan-400 mb-4">
             <Shield size={24} />
             <h2 className="orbitron text-2xl font-bold text-white uppercase">Data Collection</h2>
           </div>
           <p className="text-white/60 leading-relaxed font-light">
             At TechOl Studio, we prioritize digital sovereignty. We collect minimal personal data—primarily information you voluntarily provide via our contact forms (Name, Email, Project Details) to facilitate communication. We do not sell data to third-party brokers.
           </p>
        </section>

        <section className="glass p-10 rounded-[40px] border-white/5 space-y-6">
           <div className="flex items-center gap-4 text-cyan-400 mb-4">
             <Lock size={24} />
             <h2 className="orbitron text-2xl font-bold text-white uppercase">Security Measures</h2>
           </div>
           <p className="text-white/60 leading-relaxed font-light">
             We employ military-grade encryption standards (AES-256) for data storage and TLS 1.3 for data transmission. While no system is theoretically impenetrable, our architecture is designed with a "security-first" mindset to mitigate risks.
           </p>
        </section>

        <section className="glass p-10 rounded-[40px] border-white/5 space-y-6">
           <div className="flex items-center gap-4 text-cyan-400 mb-4">
             <Eye size={24} />
             <h2 className="orbitron text-2xl font-bold text-white uppercase">Cookies & Tracking</h2>
           </div>
           <p className="text-white/60 leading-relaxed font-light">
             We use essential cookies solely for site functionality (e.g., remembering your session preference). Analytical data is anonymized and used strictly to optimize system performance.
           </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
