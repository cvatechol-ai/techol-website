
import React from 'react';
import { Scale, FileText, AlertTriangle } from 'lucide-react';

const Legal: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-32 min-h-screen">
      <div className="mb-20">
        <div className="text-cyan-400 text-[10px] font-black orbitron tracking-[0.4em] uppercase mb-6">Terms of Service</div>
        <h1 className="orbitron text-5xl font-black text-white uppercase mb-8">Legal <span className="text-cyan-400">Framework.</span></h1>
        <p className="text-white/40 text-lg">Effective Date: {new Date().toLocaleDateString()}</p>
      </div>

      <div className="space-y-16">
        <section className="glass p-10 rounded-[40px] border-white/5 space-y-6">
           <div className="flex items-center gap-4 text-cyan-400 mb-4">
             <FileText size={24} />
             <h2 className="orbitron text-2xl font-bold text-white uppercase">Engagement</h2>
           </div>
           <p className="text-white/60 leading-relaxed font-light">
             By accessing TechOl Studio's services, you agree to these terms. All project engagements are governed by a separate Master Services Agreement (MSA) signed prior to project commencement.
           </p>
        </section>

        <section className="glass p-10 rounded-[40px] border-white/5 space-y-6">
           <div className="flex items-center gap-4 text-cyan-400 mb-4">
             <Scale size={24} />
             <h2 className="orbitron text-2xl font-bold text-white uppercase">Intellectual Property</h2>
           </div>
           <p className="text-white/60 leading-relaxed font-light">
             Upon full payment, all final deliverables become the exclusive property of the client. TechOl Studio retains the right to display the work in our portfolio and marketing materials unless a Non-Disclosure Agreement (NDA) specifies otherwise.
           </p>
        </section>

        <section className="glass p-10 rounded-[40px] border-white/5 space-y-6">
           <div className="flex items-center gap-4 text-cyan-400 mb-4">
             <AlertTriangle size={24} />
             <h2 className="orbitron text-2xl font-bold text-white uppercase">Limitation of Liability</h2>
           </div>
           <p className="text-white/60 leading-relaxed font-light">
             TechOl Studio is not liable for indirect, incidental, or consequential damages arising from the use of our digital products. We provide a standard warranty period for bug fixes post-deployment as defined in individual contracts.
           </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
