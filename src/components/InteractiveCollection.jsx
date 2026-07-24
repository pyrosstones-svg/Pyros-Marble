import React, { useState } from 'react';
import { Sparkles, Gem, Layers, Landmark, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function InteractiveCollection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const materials = [
    {
      id: 0,
      title: 'Luxury Marble Slabs',
      name: 'Italian Statuario & Lilac White',
      application: 'Lobby Book-Matched Cladding & Fireplaces',
      specifications: [
        { label: 'Gloss Level', value: '95+ Luster rating' },
        { label: 'Slab Thickness', value: '20mm / 30mm calibrated' },
        { label: 'Water Porosity', value: '< 0.04% hydrophobic' },
        { label: 'Sourcing Hub', value: 'Carrara (IT) / Udaipur (IN)' }
      ],
      stoneCloseUp: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop',
      interiorMockup: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      icon: Gem
    },
    {
      id: 1,
      title: 'Premium Granite Surfaces',
      name: 'Absolute Black & Alaska Gold',
      application: 'Heavy-Duty Kitchen Worktops & Facades',
      specifications: [
        { label: 'Hardness Rating', value: '6.5 Mohs density scale' },
        { label: 'Heat Tolerance', value: 'Up to 900°C fire-rated' },
        { label: 'Slab Dimension', value: 'Jumbo sizes (300cm x 190cm)' },
        { label: 'Sourcing Hub', value: 'Andhra Pradesh / Rajasthan (IN)' }
      ],
      stoneCloseUp: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop',
      interiorMockup: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
      icon: Layers
    },
    {
      id: 2,
      title: 'Exotic Quartz & Quartzites',
      name: 'Taj Mahal & Super White Quartzite',
      application: 'Stain-Proof Islands & Luxury Vanities',
      specifications: [
        { label: 'Acid Resistance', value: '100% chemically inert' },
        { label: 'Scratch Proofing', value: 'High diamond segment segment' },
        { label: 'Resin Bonding', value: 'Ultra-clear 3G vacuum bonded' },
        { label: 'Sourcing Hub', value: 'Brazil Quarries / Bangalore (IN)' }
      ],
      stoneCloseUp: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=600&auto=format&fit=crop',
      interiorMockup: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
      icon: Sparkles
    },
    {
      id: 3,
      title: 'Architectural Landscaping',
      name: 'Teakwood Sandstone & Kota Blue',
      application: 'Exterior Patios, Pool Decks & Columns',
      specifications: [
        { label: 'Surface Texture', value: 'Natural Cleft / Sandblasted' },
        { label: 'Slip Coefficient', value: 'R11 safety rating' },
        { label: 'Weather Integrity', value: 'Frost & thermal shock proof' },
        { label: 'Sourcing Hub', value: 'Kota Quarry Belt / Udaipur (IN)' }
      ],
      stoneCloseUp: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=600&auto=format&fit=crop',
      interiorMockup: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop',
      icon: Landmark
    }
  ];

  return (
    <section id="interactive-showroom" className="py-24 bg-[#FAF6F0] border-b border-[#EADCC9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto reveal reveal-slide-up">
          <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">
            Interactive Material Studio
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#1C1C21]">
            Experience Slabs in Living Spaces
          </h2>
          <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light mt-4">
            Toggle between our core architectural stone selections to inspect close-up slab grains and preview them in high-end mockups.
          </p>
        </div>

        {/* Tab Swatches */}
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-3 mb-12 pb-4 snap-x snap-mandatory scroll-smooth">
          {materials.map((mat, idx) => {
            const Icon = mat.icon;
            const isActive = activeIndex === idx;
            return (
              <button
                key={mat.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2.5 px-6 py-3.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 snap-center ${
                  isActive 
                    ? 'bg-[#1C1C21] border-[#1C1C21] text-[#D4AF37] shadow-xl translate-y-[-2px]' 
                    : 'bg-white border-[#EADCC9] text-[#1C1C21] hover:bg-neutral-50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-neutral-400'}`} />
                {mat.title}
              </button>
            )
          })}
        </div>

        {/* Split Preview Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT COLUMN: Close-Up Slab Inspector (5 Columns) */}
          <div className="lg:col-span-5 bg-white border border-[#EADCC9] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between reveal reveal-slide-left">
            
            <div className="space-y-6">
              {/* Grain magnifying preview */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Close-Up Grain Inspector
                </span>
                <div className="w-full aspect-[2/1] rounded-xl overflow-hidden border border-neutral-200 relative group bg-neutral-900 shadow-inner">
                  {materials.map((mat, idx) => (
                    <div
                      key={mat.id}
                      className={`absolute inset-0 bg-cover bg-center transition-all duration-700 transform scale-110 group-hover:scale-120 ${
                        activeIndex === idx ? 'opacity-90 visible' : 'opacity-0 invisible'
                      }`}
                      style={{ backgroundImage: `url(${mat.stoneCloseUp})` }}
                    />
                  ))}
                  {/* Visual loupe center indicator */}
                  <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-black/40 backdrop-blur-sm flex items-center justify-center text-[10px] font-bold text-[#D4AF37]">
                      ZOOM
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications HUD */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="font-outfit text-base font-bold text-[#1C1C21]">
                    {materials[activeIndex].name}
                  </h3>
                  <p className="text-xs text-[#8E8E93] font-light italic">
                    Ideal for: {materials[activeIndex].application}
                  </p>
                </div>

                <div className="border-t border-[#EADCC9] pt-4 space-y-2.5">
                  {materials[activeIndex].specifications.map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-xs border-b border-neutral-100 pb-1.5">
                      <span className="text-[#8E8E93] font-light">{spec.label}</span>
                      <span className="text-[#1C1C21] font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquire Action Button */}
            <div className="mt-8 pt-6 border-t border-[#EADCC9]">
              <button
                onClick={() => {
                  if (window.openEnquiryModal) {
                    window.openEnquiryModal(materials[activeIndex].name);
                  }
                }}
                className="w-full px-6 py-4 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs font-bold uppercase tracking-widest rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                Inquire Slab Load
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Interior Mockup visualizer (7 Columns) */}
          <div className="lg:col-span-7 bg-[#1C1C21] rounded-2xl overflow-hidden shadow-2xl border border-neutral-900 relative flex flex-col justify-end p-8 sm:p-10 min-h-[350px] reveal reveal-slide-right delay-200">
            
            {/* Background mockup image with zoom transitions */}
            {materials.map((mat, idx) => (
              <div
                key={mat.id}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 transform ${
                  activeIndex === idx ? 'opacity-70 scale-102 z-0 visible' : 'opacity-0 scale-100 z-0 invisible'
                }`}
                style={{ backgroundImage: `url(${mat.interiorMockup})` }}
              />
            ))}

            {/* Ambient gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-1 pointer-events-none" />

            {/* Visualizer HUD overlay */}
            <div className="relative z-10 space-y-2 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[#D4AF37] font-bold font-mono text-[9px] tracking-widest uppercase rounded">
                <CheckCircle className="w-3 h-3 text-[#D4AF37]" /> Active Space Mockup
              </span>
              <h4 className="font-cormorant text-2xl sm:text-4xl font-bold text-white tracking-wide leading-tight">
                {materials[activeIndex].title}
              </h4>
              <p className="text-xs text-white/80 font-light max-w-lg leading-relaxed">
                Visual representation of calibrated {materials[activeIndex].name} applied as a surface design. Slabs are color-sorted at Pyros yards for flawless book-matching consistency.
              </p>
            </div>

            {/* Floating corner indicator */}
            <div className="absolute top-6 right-6 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/25 flex items-center justify-center font-mono text-xs font-bold text-[#D4AF37]">
              0{activeIndex + 1}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
