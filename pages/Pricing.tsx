
import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      <div className="text-center max-w-3xl mx-auto">
        <div className="text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">Investment Plans</div>
        <h1 className="orbitron text-5xl md:text-7xl font-black mb-8 uppercase tracking-tight">Simple <span className="text-cyan-400">Pricing</span></h1>
        <p className="text-blue-100/50 text-lg">Transparent packages tailored for different stages of business growth.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {PRICING_PLANS.map((plan) => (
          <div 
            key={plan.id}
            className={`glass p-12 rounded-[48px] relative flex flex-col ${plan.featured ? 'border-cyan-500/40 shadow-[0_0_50px_rgba(0,102,255,0.1)] scale-105' : 'border-white/5'}`}
          >
            {plan.featured && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-cyan-500 text-black text-[10px] orbitron font-black rounded-full shadow-[0_0_15px_#00d4ff]">
                MOST POPULAR
              </div>
            )}
            
            <div className="mb-10">
              <h3 className="orbitron text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-xs text-blue-100/40 font-medium">{plan.description}</p>
            </div>

            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-3xl font-bold text-cyan-400">₹</span>
              <span className="orbitron text-6xl font-black text-white">{plan.price}</span>
              <span className="text-sm text-blue-100/30">/mo</span>
            </div>

            <div className="space-y-6 mb-12 flex-grow">
              <div className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">What's Included</div>
              {plan.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-4 text-sm text-blue-100/70">
                  <Check size={16} className="text-cyan-400 flex-shrink-0" />
                  {feat}
                </div>
              ))}
            </div>

            <Link 
              to="/contact" 
              className={`w-full py-5 rounded-3xl font-bold orbitron text-xs tracking-widest transition-all text-center ${plan.featured ? 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.3)]' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
            >
              Get Started Now
            </Link>
          </div>
        ))}
      </div>

      <section className="py-20 bg-white/2 rounded-[60px] p-20 border border-white/5">
        <h2 className="orbitron text-3xl font-bold text-center mb-16">Compare All <span className="text-cyan-400">Features</span></h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-6 text-sm orbitron font-bold uppercase tracking-widest text-blue-100/40">Feature</th>
                <th className="py-6 text-sm orbitron font-bold text-center">Starter</th>
                <th className="py-6 text-sm orbitron font-bold text-center text-cyan-400">Pro</th>
                <th className="py-6 text-sm orbitron font-bold text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Number of Pages', starter: '3-5', pro: '10-15', ent: 'Unlimited' },
                { name: 'UI/UX Design', starter: 'Basic', pro: 'Advanced', ent: 'Custom' },
                { name: 'SEO Optimization', starter: 'Basic', pro: 'Advanced', ent: 'Full' },
                { name: 'E-Commerce Integration', starter: false, pro: true, ent: true },
                { name: 'API Support', starter: false, pro: true, ent: true },
                { name: '24/7 Support', starter: false, pro: false, ent: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-6 text-sm font-medium text-blue-100/60">{row.name}</td>
                  <td className="py-6 text-sm text-center">
                    {typeof row.starter === 'string' ? row.starter : (row.starter ? <Check className="mx-auto text-cyan-400" /> : <X className="mx-auto text-red-500/50" />)}
                  </td>
                  <td className="py-6 text-sm text-center">
                    {typeof row.pro === 'string' ? row.pro : (row.pro ? <Check className="mx-auto text-cyan-400" /> : <X className="mx-auto text-red-500/50" />)}
                  </td>
                  <td className="py-6 text-sm text-center">
                    {typeof row.ent === 'string' ? row.ent : (row.ent ? <Check className="mx-auto text-cyan-400" /> : <X className="mx-auto text-red-500/50" />)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
