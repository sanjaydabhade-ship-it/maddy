
import React from 'react';

export const WhyThisExists: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-white border-y border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-block p-3 bg-red-50 rounded-2xl mb-4">
            <span className="text-4xl">❤️</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-food-red">Why This Page Exists</h2>
          <p className="text-xl md:text-2xl leading-relaxed text-neutral-600">
            “This page exists because some dreams deserve to be seen, even if the content is still stuck in the corporate calendar.”
          </p>
          <p className="text-lg text-neutral-500 italic">
            Life moves fast between spreadsheets and supply chains, but the flavor of Delhiwaale is too good to stay offline. 
            We built this to remind you that your brand is ready to roar.
          </p>
        </div>
      </div>
    </section>
  );
};
