
import React from 'react';

export const CTA: React.FC = () => {
  const handleClick = () => {
    alert("Yay! Sanjay is waiting for your WhatsApp content 🥳");
    // In a real app, this could open a mailto link or whatsapp link
  };

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-food-red opacity-95"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-800 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-10 md:p-16 shadow-2xl text-center transform hover:scale-[1.02] transition-transform duration-500">
          <h2 className="text-3xl md:text-5xl font-bold text-food-red mb-8">Dear Maddy ji,</h2>
          <p className="text-xl md:text-2xl text-neutral-700 mb-10 leading-relaxed">
            If you’re reading this, it means the teaser worked. 
            The stage is set, the table is laid out. Now we just need the star of the show.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-food-cream p-6 rounded-2xl border border-neutral-100 hover:border-food-mustard transition-colors group">
              <h4 className="font-bold text-food-red mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-food-mustard text-white flex items-center justify-center text-xs">1</span>
                The Essentials
              </h4>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex gap-2"><span>✨</span> Your food story</li>
                <li className="flex gap-2"><span>📋</span> Menu details</li>
                <li className="flex gap-2"><span>🎯</span> Brand vision</li>
              </ul>
            </div>
            <div className="bg-food-cream p-6 rounded-2xl border border-neutral-100 hover:border-food-mustard transition-colors group">
              <h4 className="font-bold text-food-red mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-food-mustard text-white flex items-center justify-center text-xs">2</span>
                The Secret Ingredient
              </h4>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex gap-2"><span>⏳</span> 20 mins of your time</li>
                <li className="flex gap-2"><span>📸</span> High-res food shots</li>
                <li className="flex gap-2"><span>🤝</span> Final Approval</li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-neutral-500 mb-10">
            So this mockup can finally become your real food brand website.
          </p>

          <button 
            onClick={handleClick}
            className="group relative inline-flex items-center justify-center px-10 py-6 font-bold text-white transition-all duration-200 bg-food-red font-pj rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 shadow-xl hover:-translate-y-1 hover:bg-red-900"
          >
            <span className="text-2xl mr-3">“Okay Sanjay, I’ll Send the Content 😄”</span>
          </button>

          {/* New Big Font Humorous Call-out */}
          <div className="mt-16 pt-8 border-t border-neutral-100">
            <h3 className="text-4xl md:text-6xl font-black text-food-red uppercase tracking-tighter animate-pulse">
              ARE MADDY, DATA KAB DEGA? 🤔
            </h3>
          </div>
          
          <p className="mt-8 text-sm text-neutral-400">
            * Warning: Clicking this button might result in a highly successful food business.
          </p>
        </div>
      </div>
    </section>
  );
};
