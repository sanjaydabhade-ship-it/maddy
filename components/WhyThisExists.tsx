import React from "react";

const WhyThisExists: React.FC = () => {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-food-red mb-6">
          Why This Page Exists
        </h2>

        <p className="text-lg text-neutral-700 leading-relaxed">
          Because some food brands deserve an online presence,
          even if the owner hasn’t found 30 uninterrupted minutes yet.
        </p>
      </div>
    </section>
  );
};

export default WhyThisExists;
