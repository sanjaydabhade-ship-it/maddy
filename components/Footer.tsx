
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-neutral-900 text-neutral-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-2xl mb-1">Delhiwaale</h3>
            <p className="text-sm">A Taste of Old Delhi, coming soon.</p>
          </div>
          
          <div className="text-center">
            <p className="text-neutral-500 italic">
              “Teased & Designed by <span className="text-white font-medium">Sanjay Dabhade</span>”
            </p>
            <p className="text-xs mt-1">Because good food deserves a great website.</p>
          </div>

          <div className="flex space-x-4">
             {/* Mock Socials */}
             <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-food-mustard transition-colors cursor-pointer">📸</div>
             <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-food-mustard transition-colors cursor-pointer">🐦</div>
             <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-food-mustard transition-colors cursor-pointer">🔗</div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Delhiwaale Mockup Project. All Humor Intended.</p>
        </div>
      </div>
    </footer>
  );
};
