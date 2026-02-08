
import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-food-red mb-4">
              About the Man, the Myth, the Delhiwaale
            </h2>
            <div className="w-24 h-1 bg-food-mustard mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
              <p>
                Mr. Madananjay Sharma is a passionate food lover, full-time corporate professional, and part-time dreamer of a legendary food brand. 
              </p>
              <p>
                While the recipes are ready and the vision is clear, the website content is still <span className="font-bold text-food-red">‘under preparation’</span>, much like a slow-cooked Delhi-style gravy.
              </p>
              <div className="bg-orange-50 p-6 rounded-2xl border-l-8 border-food-mustard shadow-sm italic">
                “Status: Waiting for owner’s inputs since... we lost count.”
              </div>
            </div>

            <div className="bg-food-cream p-8 rounded-3xl border border-neutral-100 shadow-xl relative">
              <h3 className="text-2xl font-bold mb-6 text-food-red">Quick Stats</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-food-mustard flex items-center justify-center text-white font-bold">✓</span>
                  <span>Passion for Food: 100%</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-food-mustard flex items-center justify-center text-white font-bold">✓</span>
                  <span>Corporate Schedule: 200% Packed</span>
                </li>
                <li className="flex items-center gap-3 text-red-400">
                  <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold">?</span>
                  <span className="line-through">Available Free Time: 0.1%</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">!</span>
                  <span>Website Readiness: Pending WhatsApp message</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-8 border-t border-neutral-200">
                <p className="text-sm text-neutral-500 uppercase tracking-widest font-bold">Brand Philosophy</p>
                <p className="text-food-red font-medium">"Dil Se Delhi, Dimaag Se Corporate, Swad Se Lajawab."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
