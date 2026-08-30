import React, { useState } from 'react';
import { stones } from '../data/stoneData';
import { Search, Eye, ArrowRight, CheckCircle2, Shield, HardHat, Package } from 'lucide-react';
import { navigate } from '../utils/navigation';
import CategoryCTA from './CategoryCTA';

export default function GranitePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const graniteStones = stones.filter(stone => 
    stone.category === 'granite' && 
    (stone.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     stone.origin.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#FAF9F6] text-[#1C1C21] min-h-screen">
      
      {/* Hero Header */}
      <div className="bg-[#1C1C21] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-mono mb-4">
            <HardHat className="w-3.5 h-3.5" />
            <span>Heavy Architectural Natural Stone</span>
          </div>
          
          <h1 className="font-cormorant text-4xl sm:text-6xl font-light tracking-tight mb-4 text-white">
            Premium Indian Granite Slabs Exporter
          </h1>
          <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto my-4" />
          <p className="font-inter text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
            High-density North & South Indian granite gangsaw slabs, calibrated kitchen countertops, and heavy architectural paving stone. Exporting globally with ISPM-15 wooden bundle crating.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 pb-6 border-b border-[#E5E7EB]">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8E8E93] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search Indian Granite..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E2E8F0] rounded-lg text-xs text-[#1C1C21] placeholder-[#8E8E93] focus:border-[#D4AF37] focus:outline-none shadow-xs"
            />
          </div>
          <span className="text-xs font-mono text-[#4E4E59]">
            Displaying <strong className="text-[#1C1C21] font-bold">{graniteStones.length}</strong> Export Varieties
          </span>
        </div>

        {/* Granite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graniteStones.map((stone) => (
            <div 
              key={stone.id} 
              className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <img 
                  src={stone.image} 
                  alt={stone.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700" 
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-[9px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] border border-[#E2E8F0]">
                  Granite
                </span>

                <div 
                  onClick={() => navigate(`/product/${stone.id}`)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/80 backdrop-blur-xs transition-opacity duration-300 cursor-pointer"
                >
                  <div className="px-5 py-2.5 bg-[#D4AF37] text-black font-semibold text-xs tracking-wider uppercase rounded flex items-center gap-2 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Granite Slab
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-cormorant text-2xl font-semibold text-[#1C1C21] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {stone.name}
                </h3>
                <p className="font-inter text-xs text-[#4E4E59] line-clamp-2 leading-relaxed mb-4">
                  {stone.description}
                </p>

                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">
                    Quarry: {stone.origin}
                  </span>
                  <button 
                    onClick={() => navigate(`/product/${stone.id}`)}
                    className="text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1"
                  >
                    View Specs <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Category CTA Block */}
        <CategoryCTA category="granite" />
      </div>
    </div>
  );
}
