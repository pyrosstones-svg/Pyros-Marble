import React from 'react';
import { ArrowDown, Container } from 'lucide-react';
import Marble3DCube from './Marble3DCube';

export default function Hero({ onExploreClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center text-white pt-28 pb-20 overflow-hidden bg-neutral-950"
    >

      {/* Cinematic Looping Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 scale-102"
          src="https://demo.awaikenthemes.com/assets/videos/tilux-hero-video.mp4"
        />
      </div>

      {/* Rich dark overlay to ensure maximum text readability and visual depth */}
      <div className="absolute inset-0 z-1" style={{ backgroundColor: 'rgba(10, 10, 12, 0.68)' }} />

      {/* Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT PANEL: Headline & CTA (7 Columns) */}
        <div className="lg:col-span-7 space-y-8 text-left reveal reveal-slide-left">

          {/* Export Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 text-[#D4AF37] font-inter text-[10px] sm:text-[11px] tracking-[0.1em] uppercase font-semibold shadow-lg shadow-black/30 leading-normal">
            <Container className="w-3.5 h-3.5 shrink-0" />
            <span>PREMIUM MARBLE EXPORTER FROM INDIA • TRUSTED GLOBAL NATURAL STONE SUPPLIER</span>
          </div>

          {/* Luxury Split Headline */}
          <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl xl:text-[4.75rem] font-medium tracking-wide leading-[1.08] text-white">
            India's Leading <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3F4F6] to-[#D4AF37]">
              Marble Exporter
            </span> <br />
            & Granite Supplier
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-stretch sm:items-center">
            <button
              onClick={() => onExploreClick('catalog')}
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#b59228] text-black font-bold text-xs tracking-[0.2em] uppercase rounded-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-102 hover:shadow-[#D4AF37]/20"
            >
              EXPLORE COLLECTION
            </button>
            <button
              onClick={() => onExploreClick('contact')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-[0.2em] uppercase rounded-md transition-all duration-300 hover:-translate-y-1 hover:scale-102"
            >
              REQUEST EXPORT QUOTE
            </button>
          </div>

        </div>

        {/* RIGHT PANEL: Paragraph, Clients Badge & Marble Block Image Card (5 Columns) */}
        <div className="lg:col-span-5 space-y-6 text-left lg:pl-6 reveal reveal-slide-right delay-200">

          {/* Sub-paragraph details */}
          <p className="font-inter text-sm sm:text-base text-white/80 leading-relaxed font-light tracking-wide max-w-xl">
            Pyros is a leading <strong className="text-white font-semibold">Marble Exporter from India</strong> and trusted <strong className="text-white font-semibold">Granite Exporter from India</strong>, delivering premium <strong className="text-white font-semibold">marble slabs, granite slabs, marble tiles, granite tiles, quartzite, and natural stone</strong> to architects, builders, importers, wholesalers, and distributors worldwide.
          </p>

          {/* Interactive 360° Rotatable Marble Cube */}
          <div className="mt-2">
            <Marble3DCube />
          </div>

        </div>

      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer opacity-75 hover:opacity-100 transition-opacity" onClick={() => onExploreClick('catalog')}>
        <span className="text-[9px] uppercase font-mono tracking-widest text-[#D4AF37]">DISCOVER OUR COLLECTIONS</span>
        <ArrowDown className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
      </div>

    </section>
  );
}
