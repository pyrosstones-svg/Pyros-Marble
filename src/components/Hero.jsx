import React from 'react';
import { ArrowDown, Container, Play, Star, Globe, ShieldCheck } from 'lucide-react';

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
      <div className="absolute inset-0 z-1" style={{ backgroundColor: 'rgba(10, 10, 12, 0.72)' }} />

      {/* Grid Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* LEFT PANEL: Headline & CTA (7 Columns) */}
        <div className="lg:col-span-7 space-y-8 text-left reveal reveal-slide-left">

          {/* Export Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#D4AF37]/45 bg-[#D4AF37]/15 text-[#D4AF37] font-inter text-xs md:text-sm tracking-[0.2em] uppercase font-bold shadow-lg shadow-black/40">
            <Container className="w-4 h-4 text-[#D4AF37]" />
            Premier Marble & Granite Exporter from India
          </div>

          {/* Luxury Split Headline */}
          <h1 className="font-cormorant text-5xl sm:text-7xl lg:text-8xl font-medium tracking-wide leading-[1.06] text-white">
            World-Class <br />
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3F4F6] to-[#D4AF37]">
              Indian Marble & Granite Slabs
            </span>
          </h1>

          {/* Sub-paragraph details with boosted font size & keywords */}
          <p className="font-inter text-lg sm:text-xl text-neutral-200 leading-relaxed font-normal tracking-wide max-w-2xl">
            Pyros Surfaces is an established <strong className="text-white font-semibold">marble exporter from India</strong> and premier <strong className="text-white font-semibold">Indian granite supplier</strong>. We process and ship 20mm & 30mm gangsaw calibrated marble slabs, granite slabs, and custom tiles directly to Saudi Arabia, UAE, USA, UK, and worldwide destinations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-stretch sm:items-center pt-2">
            <button
              onClick={() => onExploreClick('catalog')}
              className="px-8 py-4 bg-[#D4AF37] hover:bg-[#b58d1e] text-black font-outfit font-bold text-sm tracking-[0.18em] uppercase rounded-md shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-102 hover:shadow-[#D4AF37]/30"
            >
              Explore Slabs & Tiles
            </button>
            <button
              onClick={() => onExploreClick('contact')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-outfit font-bold text-sm tracking-[0.18em] uppercase rounded-md transition-all duration-300 hover:-translate-y-1 hover:scale-102"
            >
              Saudi Arabia & Global Export Desk
            </button>
          </div>

        </div>

        {/* RIGHT PANEL: Paragraph, Trade Features & Badges (5 Columns) */}
        <div className="lg:col-span-5 space-y-8 text-left lg:pl-6 reveal reveal-slide-right delay-200">

          <div className="bg-white/5 border border-white/15 rounded-2xl p-7 backdrop-blur-md space-y-6 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              <h3 className="font-outfit text-lg font-bold text-white uppercase tracking-wider">Export Direct Standards</h3>
            </div>

            <ul className="space-y-3.5 text-sm md:text-base text-neutral-300 font-normal">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                <span><strong className="text-white">Gangsaw Calibrated:</strong> 20mm & 30mm thickness precision for slabs and tiles.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                <span><strong className="text-white">Saudi Arabia Exporter:</strong> SASO / SABER certification clearance for KSA ports.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                <span><strong className="text-white">Seaworthy Lashing:</strong> ISPM-15 wooden A-frame lashing for zero transit damage.</span>
              </li>
            </ul>
          </div>

          {/* Client Review / Destinations Widget */}
          <div className="flex flex-wrap items-center gap-6">

            {/* Overlay Avatars */}
            <div className="flex -space-x-3">
              {[
                { name: 'SA', bg: 'bg-[#D4AF37]/25 text-[#D4AF37] border-[#D4AF37]/50' },
                { name: 'AE', bg: 'bg-neutral-800 text-white border-white/20' },
                { name: 'US', bg: 'bg-[#D4AF37]/25 text-[#D4AF37] border-[#D4AF37]/50' },
                { name: 'UK', bg: 'bg-neutral-800 text-white border-white/20' }
              ].map((av, idx) => (
                <div
                  key={idx}
                  className={`w-11 h-11 rounded-full border-2 ${av.bg} flex items-center justify-center text-xs font-bold tracking-widest font-mono shadow-md shrink-0`}
                >
                  {av.name}
                </div>
              ))}
              <div className="w-11 h-11 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37] text-black flex items-center justify-center text-xs font-bold shrink-0 shadow-md">
                5★
              </div>
            </div>

            {/* Review text */}
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-white/90">Trusted by Global Importers & Contractors</p>
              <p className="text-xs text-neutral-400 font-mono">160+ Natural Stone Slabs Available</p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Scroll Cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer opacity-75 hover:opacity-100 transition-opacity" onClick={() => onExploreClick('catalog')}>
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#D4AF37]">Scroll to Slabs</span>
        <ArrowDown className="w-4 h-4 text-[#D4AF37] animate-bounce" />
      </div>

    </section>
  );
}
