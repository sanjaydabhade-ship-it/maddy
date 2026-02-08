import React from "react";

const FoodSection: React.FC = () => {
  return (
    <section id="food" className="py-24 bg-food-cream">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-food-red mb-12">
          Signature Dishes (Imaginary for Now)
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Delhi Special
            </h3>
            <p className="text-neutral-600">
              Recipe details pending approval from the owner.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Chef’s Favourite
            </h3>
            <p className="text-neutral-600">
              Chef is ready. Content is not.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">
              Bestseller
            </h3>
            <p className="text-neutral-600">
              Will be revealed once the website is complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
