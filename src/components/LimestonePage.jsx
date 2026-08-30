import React, { useState } from 'react';
import { stones } from '../data/stoneData';
import { Search, Eye, ArrowRight, Layers } from 'lucide-react';
import { navigate } from '../utils/navigation';
import CategoryCTA from './CategoryCTA';

export default function LimestonePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const limestoneStones = stones.filter(stone => 
    stone.category === 'limestone' && 
    (stone.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     stone.origin.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#FAF9F6] text-[#1C1C21] min-h-screen">
      
      {/* Category Hero Banner */}
      <div className="bg-[#1C1C21] text-white pt-28 pb-16 px-6 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-md text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            🏛️ Calibrated Kota & Limestone Exporter
          </div>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-semibold leading-tight">
            Indian Limestone & Kota Stone
          </h1>
          <p className="font-inter text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
            Kota Blue, Kota Brown, Tandur Yellow, and Lime Black stone. Sawn-edge calibrated tiles and slabs for commercial public flooring, exterior plazas, and hospital projects.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E5E7EB]">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">
              Dedicated Limestone Page
            </span>
            <h2 className="font-cormorant text-3xl font-medium text-[#1C1C21]">
              Browse Limestone ({limestoneStones.length} Varieties)
            </h2>
          </div>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search Limestone by name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E5E7EB] rounded-lg text-xs font-inter focus:outline-none focus:border-[#D4AF37] shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {limestoneStones.map((stone) => (
            <div 
              key={stone.id} 
              className="group relative bg-white rounded-lg overflow-hidden border border-[#E5E7EB] hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-1 shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-neutral-100">
                <img 
                  src={stone.image} 
                  alt={stone.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700" 
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded text-[9px] tracking-[0.2em] uppercase font-bold text-[#D4AF37] border border-[#E2E8F0]">
                  Limestone
                </span>

                <div 
                  onClick={() => navigate(`/product/${stone.id}`)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-white/80 backdrop-blur-xs transition-opacity duration-300 cursor-pointer"
                >
                  <div className="px-5 py-2.5 bg-[#D4AF37] text-black font-semibold text-xs tracking-wider uppercase rounded flex items-center gap-2 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Limestone
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
        <CategoryCTA category="limestone" />
      </div>
    </div>
  );
}
