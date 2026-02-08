import React from "react";

const CTA: React.FC = () => {
  return (
    <section
      id="cta"
      className="py-24 bg-food-red text-white text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Dear Madananjay ji
        </h2>

        <p className="text-lg mb-8">
          If you’re reading this, the teaser worked.  
          Please send the content so this mockup can become a real website.
        </p>

        <button className="bg-white text-food-red px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-all">
          Sending Content Right Now 😄
        </button>
      </div>
    </section>
  );
};

export default CTA;
