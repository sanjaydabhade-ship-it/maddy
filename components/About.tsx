import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-food-red mb-6">
          The Man Behind Delhiwaale
        </h2>

        <p className="text-lg text-neutral-700 leading-relaxed">
          Madananjay Sharma is a passionate food lover, a full-time corporate
          professional, and a part-time dreamer of a legendary Delhi-style food
          brand.  
          <br /><br />
          The taste is ready. The vision is clear.  
          The website content is still pending.
        </p>
      </div>
    </section>
  );
};

export default About;
