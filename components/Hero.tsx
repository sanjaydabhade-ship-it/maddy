import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-food-cream pt-32">
      <div className="max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-food-red mb-6">
          This Could Have Been Your Food Website…
        </h1>

        <p className="text-lg md:text-xl text-neutral-700 mb-8">
          If the owner wasn’t always busy in meetings 😄
        </p>

        <a
          href="#cta"
          className="inline-block bg-food-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-900 transition-all"
        >
          Okay Sanjaay, I’ll Send the Content
        </a>
      </div>
    </section>
  );
};

export default Hero;
