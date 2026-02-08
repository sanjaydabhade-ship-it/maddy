
import React from 'react';

export const Hero: React.FC = () => {
  // Direct link derived from the provided image hosting URL
  const photoUrl = "https://i.ibb.co/ch68yQ3F/image.png";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background patterns and decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-food-mustard opacity-5 skew-x-12 -mr-20"></div>
      <div className="absolute -left-20 top-40 w-64 h-64 bg-food-red opacity-[0.03] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-food-mustard text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 animate-pulse shadow-sm">
            <span>🚀</span>
            <span className="tracking-wider uppercase">Prototype Live: Action Required</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-food-red leading-[1.1] mb-6">
            This Could Have Been Your <span className="text-food-mustard italic relative">
              Stunning
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="#E1AD01" strokeWidth="4" fill="none" />
              </svg>
            </span> Food Website...
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-600 mb-8 leading-relaxed">
            “If Only the Owner Had <span className="text-food-red font-bold underline decoration-food-mustard">30 Minutes</span> Free 😉”
          </p>
          
          <p className="text-lg text-neutral-500 italic border-l-4 border-food-mustard pl-6 py-2 bg-white/40 rounded-r-lg">
            Crafted with love, hunger, and zero content from Delhi’s busiest foodie.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a 
              href="#cta" 
              className="bg-food-red text-white text-center px-10 py-4 rounded-2xl text-lg font-bold hover:bg-red-900 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              Okay, I'm Listening!
            </a>
            <a 
              href="#food" 
              className="group border-2 border-food-red text-food-red text-center px-10 py-4 rounded-2xl text-lg font-bold hover:bg-food-red hover:text-white transition-all flex items-center justify-center gap-2"
            >
              See the (Empty) Menu
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center lg:justify-end">
          <div className="relative group perspective-1000">
            {/* Soft shadow/glow behind image */}
            <div className="absolute -inset-4 bg-food-mustard/20 rounded-[2.5rem] blur-2xl group-hover:bg-food-red/10 transition-colors duration-700"></div>
            
            {/* Photo Frame Container - Polaroid Style */}
            <div className="relative w-72 h-80 md:w-[420px] md:h-[500px] bg-white p-4 md:p-6 pb-16 md:pb-24 rounded-[0.5rem] shadow-2xl border border-neutral-100 transform rotate-2 group-hover:rotate-0 transition-all duration-700 ease-out">
              <div className="w-full h-full rounded-sm overflow-hidden relative border border-neutral-200">
                <img 
                  src={photoUrl} 
                  alt="Mr. Madananjay Sharma"
                  className="w-full h-full object-cover transition-all duration-700"
                  onError={(e) => {
                    // Fallback if the i.ibb direct link fails
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000&auto=format&fit=crop";
                  }}
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.05)]"></div>
              </div>
              
              {/* Profile Badge */}
              <div className="absolute -top-4 -right-4 bg-food-mustard text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 z-20">
                <span className="text-2xl">✨</span>
              </div>

              {/* Caption area on the polaroid bottom */}
              <div className="absolute bottom-4 left-0 w-full text-center px-4">
                 <p className="font-['Playfair_Display'] text-food-red text-xl md:text-2xl font-bold italic">Delhiwaale's Pride</p>
              </div>
            </div>
            
            {/* The Floating Caption */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-3 rounded-2xl shadow-xl border border-food-mustard/20 whitespace-nowrap transform -rotate-1 group-hover:rotate-0 transition-all duration-500 z-30">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-food-red font-extrabold tracking-tight text-lg">The Man of the Hour 🌟</span>
              </div>
            </div>

            {/* Floating food icons for extra "Delhiwaale" flavor */}
            <div className="absolute -left-12 top-1/4 text-5xl animate-bounce duration-[3000ms] opacity-40 select-none">🥘</div>
            <div className="absolute -right-6 bottom-1/4 text-5xl animate-bounce duration-[2000ms] opacity-40 select-none" style={{animationDelay: '1s'}}>🥙</div>
          </div>
        </div>
      </div>
    </section>
  );
};
