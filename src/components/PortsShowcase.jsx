import React, { useState } from 'react';
import { Ship, Anchor, CheckCircle2, ChevronLeft, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';

const portsList = [
  { 
    id: 'mundra',
    smallHeading: 'WEST INDIA EXPORT HUB',
    title: 'Mundra Port', 
    state: 'Gujarat, West Coast', 
    type: 'FCL Container Terminal', 
    description: "Our primary export hub for premium marble, quartzite, sandstone, limestone, and engineered stone. Located on India's west coast, Mundra Port enables fast container movement to the Middle East, Europe, Africa, and North America with efficient customs clearance and global shipping connectivity.",
    tags: [
      'Marble Slabs Export', 
      '24/7 Container Operations', 
      'Saudi Arabia • UAE • Europe'
    ],
    products: [
      {
        id: 'crystalo-white-quartzite',
        category: 'QUARTZITE',
        name: 'Crystalo White Quartzite',
        description: 'Luxury natural quartzite with exceptional durability, elegant veining, and premium finish for luxury interiors, countertops, feature walls, and architectural applications.',
        image: '/Crestalo White North.jpg'
      },
      {
        id: 'maharaja-white-marble',
        category: 'MARBLE',
        name: 'Maharaja White Marble',
        description: 'Premium Indian marble featuring timeless white aesthetics, refined natural patterns, and superior strength for residential, hospitality, and commercial projects.',
        image: '/Maharaja White North.jpg'
      },
      {
        id: 'calacatta-quartz',
        category: 'QUARTZ',
        name: 'Calacatta Quartz',
        description: 'Engineered quartz with luxurious Calacatta-inspired veining, designed for modern kitchens, bathrooms, commercial interiors, and premium architectural spaces.',
        image: '/images/stones/calacatta-quartz.png'
      },
      {
        id: 'teakwood-sandstone',
        category: 'SANDSTONE',
        name: 'Teakwood Sandstone',
        description: 'Natural Indian sandstone with warm wood-like textures, ideal for exterior facades, landscape architecture, flooring, and wall cladding applications.',
        image: '/images/stones/teakwood-honed.jpg'
      }
    ]
  },
  { 
    id: 'chennai',
    smallHeading: 'SOUTH INDIA EXPORT HUB',
    title: 'Chennai Port', 
    state: 'Tamil Nadu, East Coast', 
    type: 'Granite & Heavy Cargo Hub', 
    description: "Dedicated export gateway for premium granite, black granite, quartzite, and natural stone products. Chennai Port offers dependable shipping routes to Southeast Asia, Australia, the Gulf region, and international construction markets with efficient logistics support.",
    tags: [
      'Granite Export', 
      'Global Shipping Network', 
      'Asia • Australia • GCC'
    ],
    products: [
      {
        id: 'crystalo-white-quartzite-chennai',
        category: 'QUARTZITE',
        name: 'Crystalo White Quartzite',
        description: 'Luxury natural quartzite with exceptional durability, elegant veining, and premium finish for luxury interiors, countertops, feature walls, and architectural applications.',
        image: '/Crestalo White North.jpg'
      },
      {
        id: 'maharaja-white-marble-chennai',
        category: 'MARBLE',
        name: 'Maharaja White Marble',
        description: 'Premium Indian marble featuring timeless white aesthetics, refined natural patterns, and superior strength for residential, hospitality, and commercial projects.',
        image: '/Maharaja White North.jpg'
      },
      {
        id: 'calacatta-quartz-chennai',
        category: 'QUARTZ',
        name: 'Calacatta Quartz',
        description: 'Engineered quartz with luxurious Calacatta-inspired veining, designed for modern kitchens, bathrooms, commercial interiors, and premium architectural spaces.',
        image: '/images/stones/calacatta-quartz.png'
      },
      {
        id: 'teakwood-sandstone-chennai',
        category: 'SANDSTONE',
        name: 'Teakwood Sandstone',
        description: 'Natural Indian sandstone with warm wood-like textures, ideal for exterior facades, landscape architecture, flooring, and wall cladding applications.',
        image: '/images/stones/teakwood-honed.jpg'
      }
    ]
  }
];

export default function PortsShowcase() {
  const [activePortId, setActivePortId] = useState('mundra');

  const activePort = portsList.find(p => p.id === activePortId) || portsList[0];

  const handleEnquiry = (stoneName) => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal(stoneName);
    } else {
      window.location.hash = `#/contact?product=${encodeURIComponent(stoneName)}`;
    }
  };

  return (
    <div className="space-y-12">
      
      {/* 1. Dual Primary Gateways Feature Grid (Slideable on Mobile, Grid on Desktop) */}
      <div className="flex md:grid md:grid-cols-2 overflow-x-auto no-scrollbar gap-4 pb-4 md:pb-0 snap-x snap-mandatory scroll-smooth w-full text-left">
        {portsList.map((port) => {
          const isActive = port.id === activePortId;

          return (
            <div
              key={port.id}
              onClick={() => setActivePortId(port.id)}
              className={`shrink-0 snap-center w-[75vw] sm:w-[85vw] md:w-full relative cursor-pointer rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-500 overflow-hidden border flex flex-col justify-between ${
                isActive
                  ? 'bg-[#1C1C21] border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/50'
                  : 'bg-white border-[#EADCC9] hover:border-[#D4AF37]/60 hover:shadow-lg'
              }`}
            >
              {/* Active Ambient Glow Highlight */}
              {isActive && (
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#D4AF37]/10 filter blur-2xl pointer-events-none" />
              )}

              <div>
                {/* Small Heading & Selection Badge */}
                <div className="flex justify-between items-center mb-3 gap-2">
                  <span className={`text-[10px] sm:text-[11px] font-outfit uppercase tracking-widest font-bold ${
                    isActive ? 'text-[#D4AF37]' : 'text-[#8C6D23]'
                  }`}>
                    {port.smallHeading}
                  </span>

                  <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border shrink-0 ${
                    isActive 
                      ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]' 
                      : 'bg-neutral-100 border-neutral-200 text-neutral-600'
                  }`}>
                    {isActive ? '● Active Hub' : 'Select Hub'}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-colors shrink-0 ${
                    isActive 
                      ? 'bg-[#D4AF37] text-black shadow-md' 
                      : 'bg-[#FAF9F6] border border-[#EADCC9] text-[#D4AF37]'
                  }`}>
                    {port.id === 'mundra' ? <Ship className="w-5 h-5 sm:w-6 sm:h-6" /> : <Anchor className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>
                  <h3 className={`font-cormorant text-2xl sm:text-3xl font-bold ${
                    isActive ? 'text-white' : 'text-[#1C1C21]'
                  }`}>
                    {port.title}
                  </h3>
                </div>

                {/* Description */}
                <p className={`font-inter text-xs sm:text-sm leading-relaxed font-light mb-6 ${
                  isActive ? 'text-neutral-300' : 'text-[#4E4E59]'
                }`}>
                  {port.description}
                </p>
              </div>

              {/* Tags List */}
              <div className="pt-4 border-t border-dashed border-neutral-300/30">
                <div className="flex flex-wrap gap-2">
                  {port.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md font-medium flex items-center gap-1.5 ${
                        isActive 
                          ? 'bg-white/10 text-white border border-white/15' 
                          : 'bg-[#FAF9F6] text-[#1C1C21] border border-[#EADCC9]'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* 2. Product Section (READY FOR GLOBAL SHIPMENT) */}
      <div className="space-y-6 text-left">
        
        {/* Product Section Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-[#EADCC9] pb-4 gap-4">
          <div>
            <span className="font-outfit text-xs uppercase font-bold tracking-[0.2em] text-[#D4AF37] block mb-1">
              READY FOR GLOBAL SHIPMENT
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#1C1C21]">
              Premium Marble &amp; Granite <span className="italic font-normal block sm:inline">Ready for Export Worldwide</span>
            </h3>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#D4AF37] bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/20">
              Via {activePort.title}
            </span>

            {/* Navigation Arrow Controls for Desktop & Mobile */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  document.getElementById(`ports-showcase-scroll-${activePortId}`)?.scrollBy({ left: -320, behavior: 'smooth' });
                }}
                className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  document.getElementById(`ports-showcase-scroll-${activePortId}`)?.scrollBy({ left: 320, behavior: 'smooth' });
                }}
                className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Horizontal Slider (Desktop & Mobile) */}
        <div 
          key={`grid-${activePortId}`} 
          id={`ports-showcase-scroll-${activePortId}`}
          className="flex overflow-x-auto no-scrollbar gap-6 md:gap-8 pb-6 snap-x snap-mandatory scroll-smooth w-full"
        >
          {activePort.products.map((product, idx) => (
            <div 
              key={product.id}
              className="group shrink-0 snap-start w-[72vw] sm:w-[280px] md:w-[320px] lg:w-[340px] relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#EADCC9]/60 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col animate-fadeIn"
              style={{ animationDelay: `${idx * 75}ms`, animationFillMode: 'both' }}
            >
              {/* Full-height backdrop image */}
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 z-0" 
                onError={(e) => {
                  e.target.src = '/20241224_133819.jpg';
                }}
              />
              
              {/* Gradient Overlay for high-contrast legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C21]/95 via-[#1C1C21]/45 to-transparent z-10 transition-colors duration-300" />
              
              {/* Category tag */}
              <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#D4AF37] border border-[#EADCC9] text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded z-20">
                {product.category}
              </span>

              {/* Content overlay absolute at the bottom */}
              <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end text-left select-none space-y-3">
                <div>
                  <h4 className="font-outfit text-base sm:text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                    {product.name}
                  </h4>
                  <p className="font-inter text-xs text-white/75 leading-relaxed font-light mt-1.5 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                {/* Inquiry Action */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-4">
                  <button
                    onClick={() => handleEnquiry(product.name)}
                    className="w-full py-2.5 px-4 bg-[#D4AF37] hover:bg-[#b59228] text-black font-outfit text-xs font-bold uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>SEND EXPORT ENQUIRY</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

