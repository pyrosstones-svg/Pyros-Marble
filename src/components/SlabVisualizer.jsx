import React, { useState } from 'react';
import { stones } from '../data/stoneData';
import { Award, Layers, Sparkles, Droplets, Scale, Building, ChefHat, Bath, Maximize2, ZoomIn, Info } from 'lucide-react';

export default function SlabVisualizer() {
  const [selectedStone, setSelectedStone] = useState(stones[0]); // Default to Indian Carrara
  const [selectedScene, setSelectedScene] = useState('kitchen'); // kitchen, lobby, bathroom
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stones' },
    { id: 'marble', name: 'Luxury Marble' },
    { id: 'granite', name: 'Premium Granite' },
    { id: 'quartzite', name: 'Quartz & Quartzite' }
  ];

  const filteredStones = selectedCategory === 'all' 
    ? stones.filter(s => s.category !== 'natural') // Filter out rough sandstones for indoor visualization
    : stones.filter(s => s.category === selectedCategory);

  const scenes = [
    { id: 'kitchen', name: 'Kitchen Countertop', icon: ChefHat },
    { id: 'lobby', name: 'Executive Lobby Wall', icon: Building },
    { id: 'bathroom', name: 'Bathroom Vanity', icon: Bath }
  ];

  return (
    <section id="visualizer" className="py-24 bg-[#FAF4EC] border-b border-[#EADCC9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto reveal reveal-slide-up">
          <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">
            Interactive Visualizer
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#1C1C21]">
            Virtual Slab Designer
          </h2>
          <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light mt-4">
            Select a premium slab and preview how it transforms luxury residential and commercial spaces.
          </p>
        </div>

        {/* Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT PANEL: Selection & Specs (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 reveal reveal-slide-left">
            
            {/* Category Selector */}
            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-md">
              <h3 className="font-outfit text-sm font-bold uppercase tracking-wider text-[#1C1C21] mb-4">
                1. Select Stone Category
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      // Auto-select first stone of new category
                      const firstOfCat = cat.id === 'all' 
                        ? stones.filter(s => s.category !== 'natural')[0] 
                        : stones.find(s => s.category === cat.id);
                      if (firstOfCat) setSelectedStone(firstOfCat);
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-semibold tracking-wider transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-[#D4AF37] text-black shadow-md'
                        : 'bg-black/5 text-[#4E4E59] hover:bg-black/10'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Stone Grid Swatches */}
              <div className="mt-6">
                <h4 className="font-outfit text-xs font-bold uppercase tracking-wider text-[#8E8E93] mb-3">
                  Available Slabs ({filteredStones.length})
                </h4>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-h-[180px] overflow-y-auto pr-2 scrollbar-thin">
                  {filteredStones.map(stone => (
                    <button
                      key={stone.id}
                      onClick={() => setSelectedStone(stone)}
                      title={stone.name}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedStone.id === stone.id
                          ? 'border-[#D4AF37] scale-105 shadow-md shadow-[#D4AF37]/20'
                          : 'border-transparent hover:scale-105 hover:border-black/20'
                      }`}
                    >
                      <img 
                        src={stone.image} 
                        alt={stone.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Stone Specifications Card */}
            <div className="bg-[#1C1C21] text-white p-6 rounded-xl border border-white/10 shadow-lg flex-grow flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-outfit text-[10px] tracking-widest text-[#D4AF37] uppercase font-bold">
                      Selected Slab Specs
                    </span>
                    <h3 className="font-cormorant text-2xl font-semibold text-white mt-1">
                      {selectedStone.name}
                    </h3>
                  </div>
                  <span className="text-[9px] bg-white/10 px-2 py-0.5 rounded text-white/80 uppercase font-mono tracking-wider">
                    {selectedStone.category}
                  </span>
                </div>

                <p className="font-inter text-xs text-white/70 leading-relaxed font-light mb-6">
                  {selectedStone.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <div>
                      <div className="text-[9px] text-white/40 uppercase font-mono">Origin</div>
                      <div className="text-xs text-white/90 font-medium">{selectedStone.origin}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Scale className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <div>
                      <div className="text-[9px] text-white/40 uppercase font-mono">Density</div>
                      <div className="text-xs text-white/90 font-medium">{selectedStone.density}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Droplets className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <div>
                      <div className="text-[9px] text-white/40 uppercase font-mono">Water Absorp.</div>
                      <div className="text-xs text-white/90 font-medium">{selectedStone.waterAbsorption}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <div>
                      <div className="text-[9px] text-white/40 uppercase font-mono">Thickness</div>
                      <div className="text-xs text-white/90 font-medium">20mm · 30mm</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to action inside card */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-[10px] text-white/60">
                  Tolerance: <span className="text-white font-mono font-bold">±1mm Italian Gangsaw Cut</span>
                </div>
                <button
                  onClick={() => window.openEnquiryModal(selectedStone.name)}
                  className="px-4 py-2 bg-[#D4AF37] hover:bg-[#b59228] text-black font-bold text-[10px] tracking-wider uppercase rounded transition-all duration-300"
                >
                  Request Quote
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Live Visualizer Screen (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4 reveal reveal-slide-right">
            
            {/* Scene Swapper Header */}
            <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="font-outfit text-xs font-bold uppercase tracking-wider text-[#1C1C21]">
                2. Choose Application Scene
              </span>
              <div className="flex bg-black/5 p-1 rounded-lg w-full sm:w-auto">
                {scenes.map(sc => {
                  const Icon = sc.icon;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => {
                        setSelectedScene(sc.id);
                        setIsZoomed(false);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                        selectedScene === sc.id && !isZoomed
                          ? 'bg-[#1C1C21] text-white shadow-md'
                          : 'text-[#4E4E59] hover:text-[#1C1C21]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {sc.name}
                    </button>
                  );
                })}
                <button
                  onClick={() => setIsZoomed(true)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold transition-all ${
                    isZoomed
                      ? 'bg-[#1C1C21] text-white shadow-md'
                      : 'text-[#4E4E59] hover:text-[#1C1C21]'
                  }`}
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  Zoom Slab
                </button>
              </div>
            </div>

            {/* Interactive Viewport Frame */}
            <div className="relative flex-grow min-h-[400px] bg-[#141416] rounded-2xl border-4 border-white shadow-2xl overflow-hidden flex flex-col justify-end">
              
              {/* Scene View 1: Zoomed Slab view */}
              {isZoomed ? (
                <div className="absolute inset-0 z-0 animate-fadeIn">
                  <img 
                    src={selectedStone.image} 
                    alt={selectedStone.name} 
                    className="w-full h-full object-cover object-center animate-pulse-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
                  
                  {/* Zoom indicator HUD overlay */}
                  <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded border border-white/20 text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold flex items-center gap-1.5">
                    <Maximize2 className="w-3 h-3" /> Full slab inspect mode
                  </div>
                </div>
              ) : selectedScene === 'kitchen' ? (
                // Scene View 2: Kitchen Countertop
                <div className="absolute inset-0 z-0 animate-fadeIn bg-neutral-900">
                  {/* Kitchen wall/cabinet backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2e] to-[#121214] opacity-90" />
                  
                  {/* Decorative Backsplash Area */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-2/5 transition-all duration-700 shadow-inner"
                    style={{
                      backgroundImage: `url(${selectedStone.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(0.7) contrast(1.1)'
                    }}
                  />
                  
                  {/* Led lighting reflection on Backsplash */}
                  <div className="absolute top-[40%] left-0 right-0 h-4 bg-gradient-to-t from-[#D4AF37]/15 to-transparent blur-sm" />

                  {/* Kitchen Shelf and accessories */}
                  <div className="absolute top-[28%] right-[15%] w-24 h-1.5 bg-black/40 border border-white/10 rounded shadow-md" />
                  <div className="absolute top-[20%] right-[18%] w-1.5 h-8 bg-[#D4AF37]/50 rounded-full" />
                  <div className="absolute top-[16%] right-[22%] w-2 h-12 bg-white/25 rounded" />

                  {/* Foreground Countertop Slab (Swappable Stone) */}
                  <div 
                    className="absolute bottom-0 left-[5%] right-[5%] h-1/2 transition-all duration-700 border-t border-[#D4AF37]/40 shadow-[0_-15px_40px_rgba(0,0,0,0.6)]"
                    style={{
                      backgroundImage: `url(${selectedStone.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'perspective(600px) rotateX(24deg)',
                      transformOrigin: 'bottom center',
                      boxShadow: 'inset 0 40px 100px rgba(255,255,255,0.15), 0 20px 40px rgba(0,0,0,0.8)'
                    }}
                  />

                  {/* Faucet Silhouette and Reflection Overlay */}
                  <div className="absolute bottom-[35%] left-1/2 -translate-x-1/2 z-10 w-24 h-48 flex flex-col justify-end items-center pointer-events-none drop-shadow-[0_10px_15px_rgba(0,0,0,0.9)]">
                    <svg className="w-16 h-40 text-neutral-300 fill-current opacity-85" viewBox="0 0 100 200">
                      {/* Premium arched swan faucet */}
                      <path d="M40,200 L40,100 C40,70 50,40 70,40 C75,40 80,45 80,50 C80,55 75,60 70,60 C58,60 52,75 52,100 L52,200 Z" />
                      <rect x="36" y="190" width="20" height="10" rx="2" />
                      <circle cx="70" cy="50" r="3" fill="#D4AF37" />
                    </svg>
                  </div>

                  {/* Kitchen counter base plates */}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-neutral-950 border-t border-white/5 z-10 opacity-95" />
                  
                </div>
              ) : selectedScene === 'lobby' ? (
                // Scene View 3: Executive Lobby Wall
                <div className="absolute inset-0 z-0 animate-fadeIn bg-neutral-950">
                  
                  {/* Huge double-height book-matched slab wall */}
                  <div className="absolute inset-x-0 top-0 bottom-[15%] grid grid-cols-2 gap-0.5 p-1 border-b border-[#D4AF37]/20">
                    <div 
                      className="h-full transition-all duration-700"
                      style={{
                        backgroundImage: `url(${selectedStone.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'left center',
                        filter: 'brightness(0.65) contrast(1.05)'
                      }}
                    />
                    <div 
                      className="h-full transition-all duration-700 scale-x-[-1]" // mirror flip for book-matched look
                      style={{
                        backgroundImage: `url(${selectedStone.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'left center',
                        filter: 'brightness(0.65) contrast(1.05)'
                      }}
                    />
                  </div>

                  {/* Glowing PYROS corporate logo on the lobby wall */}
                  <div className="absolute top-[28%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center select-none pointer-events-none">
                    <div className="px-6 py-2 border border-[#D4AF37]/50 bg-black/60 backdrop-blur-md rounded text-center shadow-[0_0_20px_rgba(212,175,55,0.15)] animate-pulse-slow">
                      <span className="font-cormorant text-2xl tracking-[0.35em] text-[#D4AF37] uppercase font-bold">
                        PYROS
                      </span>
                      <span className="block text-[6px] tracking-[0.4em] uppercase text-white/60 font-mono mt-0.5">
                        EXPORTS GROUP
                      </span>
                    </div>
                  </div>

                  {/* Floor Reflection */}
                  <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-[#1A1A1E] z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.9)] flex justify-center">
                    {/* Reception Desk Silhouette */}
                    <div className="absolute -top-12 w-3/5 h-16 bg-[#111113] border-x border-t border-white/10 rounded-t-lg shadow-2xl flex items-center justify-between px-6">
                      <div className="w-16 h-1 bg-[#D4AF37]/45 rounded-full" />
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 bg-white/20 rounded-full" />
                        <div className="w-16 h-2 bg-white/5 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Spotlights */}
                  <div className="absolute top-0 left-1/4 w-32 h-64 bg-gradient-to-b from-[#D4AF37]/5 to-transparent blur-2xl transform -rotate-12" />
                  <div className="absolute top-0 right-1/4 w-32 h-64 bg-gradient-to-b from-[#D4AF37]/5 to-transparent blur-2xl transform rotate-12" />

                </div>
              ) : (
                // Scene View 4: Bathroom Vanity
                <div className="absolute inset-0 z-0 animate-fadeIn bg-neutral-900">
                  {/* Bathroom background walls */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1E] to-[#121214] opacity-95" />

                  {/* Swappable Stone Wall tiles in shower area */}
                  <div 
                    className="absolute top-0 left-0 bottom-[35%] w-full transition-all duration-700"
                    style={{
                      backgroundImage: `url(${selectedStone.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      filter: 'brightness(0.55) contrast(1.1)'
                    }}
                  />
                  
                  {/* Ambient backlighting glow */}
                  <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-xl z-0" />

                  {/* Floating Circular Backlit Mirror Silhouette */}
                  <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-10 w-48 h-48 rounded-full border-4 border-white/5 bg-black/40 backdrop-blur-md shadow-[0_0_35px_rgba(255,255,255,0.08),_inset_0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center">
                    {/* Mirror Reflection lines */}
                    <div className="w-40 h-0.5 bg-white/10 rotate-12" />
                  </div>

                  {/* Vanity Countertop (Selected Stone) */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-[38%] transition-all duration-700 border-t border-[#D4AF37]/35 shadow-[0_-15px_30px_rgba(0,0,0,0.5)] z-20"
                    style={{
                      backgroundImage: `url(${selectedStone.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'perspective(400px) rotateX(12deg)',
                      transformOrigin: 'bottom center'
                    }}
                  />

                  {/* Basin outlines in white */}
                  <div className="absolute bottom-[20%] left-1/3 -translate-x-1/2 z-30 w-24 h-8 bg-neutral-900/90 border border-white/10 rounded-b-xl shadow-lg flex justify-center">
                    <div className="w-1.5 h-6 bg-[#D4AF37]/50 rounded-b-full absolute -top-5" />
                  </div>
                  <div className="absolute bottom-[20%] left-2/3 -translate-x-1/2 z-30 w-24 h-8 bg-neutral-900/90 border border-white/10 rounded-b-xl shadow-lg flex justify-center">
                    <div className="w-1.5 h-6 bg-[#D4AF37]/50 rounded-b-full absolute -top-5" />
                  </div>

                </div>
              )}

              {/* HUD / Label Overlay at bottom of Visualizer screen */}
              <div className="absolute bottom-4 left-4 z-20 bg-black/75 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#D4AF37] animate-ping shrink-0" />
                <div>
                  <div className="text-[8px] text-white/50 uppercase tracking-widest font-mono">Current Slab</div>
                  <div className="text-[11px] font-bold text-white tracking-wide">
                    {selectedStone.name} · <span className="text-[#D4AF37] font-semibold">{selectedStone.origin}</span>
                  </div>
                </div>
              </div>

              {/* Instructions HUD */}
              <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-sm p-1.5 rounded border border-white/10 flex items-center gap-1 text-[8px] text-white/70">
                <Info className="w-2.5 h-2.5 text-[#D4AF37]" /> Select slabs on the left to swap texture
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
