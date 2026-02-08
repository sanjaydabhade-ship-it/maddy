
import React from 'react';

const MOCK_DISHES = [
  {
    id: 1,
    title: "Top-Secret Delhi Special",
    desc: "A recipe so secret even the web developer doesn't know it. Currently represented by Maddy ji's confident smile.",
    tag: "Details Pending"
  },
  {
    id: 2,
    title: "Chef’s Favourite",
    desc: "Maddy ji promised this would be the best-seller. Until he sends the photo, please enjoy this portrait.",
    tag: "Owner Will Tell Us Later"
  },
  {
    id: 3,
    title: "Best Seller",
    desc: "Imagine something crispy and authentic. Now look at Maddy ji and imagine him eating it.",
    tag: "As Soon As Content Arrives"
  }
];

export const FoodSection: React.FC = () => {
  const maddyPhoto = "https://i.ibb.co/ch68yQ3F/image.png";

  return (
    <section id="food" className="py-24 bg-food-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-food-red opacity-5 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-food-red mb-4">Signature Dishes</h2>
          <p className="text-lg text-neutral-600">(Imaginary for Now)</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {MOCK_DISHES.map((dish) => (
            <div key={dish.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-neutral-100 hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-neutral-200 relative overflow-hidden">
                {/* The "Dish" is currently just Maddy */}
                <img 
                  src={maddyPhoto} 
                  alt="Placeholder"
                  className="w-full h-full object-cover filter sepia-[0.3] group-hover:sepia-0 transition-all duration-700"
                />
                
                {/* Humorous Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/10 transition-colors duration-500">
                  <span className="text-white font-bold text-center px-4 transform -rotate-12 group-hover:rotate-0 transition-transform">
                    IMAGE PENDING CONTENT
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="bg-food-mustard text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm">
                    {dish.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-food-red mb-3 group-hover:text-red-700 transition-colors">
                  {dish.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-6 italic">
                  "{dish.desc}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-food-mustard font-bold text-lg">₹ TBD</span>
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xl">🥘</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-neutral-500 italic bg-white/50 inline-block px-6 py-3 rounded-full border border-dashed border-neutral-300">
            “Actual dishes will appear the moment Maddy ji sends the details.”
          </p>
        </div>
      </div>
    </section>
  );
};
