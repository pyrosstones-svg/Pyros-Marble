import React, { useState } from 'react';
import { 
  Ship, CheckCircle2, Award, ShieldCheck, Globe2, ChevronDown, 
  Building2, MapPin, Truck, Layers, ArrowRight, FileText, Check, Sparkles, Clock, Scale 
} from 'lucide-react';
import { countryData } from '../data/countryData';
import { stones } from '../data/stoneData';

export default function CountryExportPage({ countrySlug = 'saudi', onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(0);

  // Fallback to saudi if countrySlug is invalid
  const data = countryData[countrySlug] || countryData.saudi;
  const theme = data.theme || {
    heroBg: 'from-[#1C1C21] via-[#26262E] to-[#17171C]',
    accentColor: '#D4AF37',
    accentBg: 'bg-[#D4AF37]',
    cardBorder: 'border-[#D4AF37]/30',
    badgeBg: 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/40',
    heroSubtitle: 'Factory Direct Indian Natural Stone Exports'
  };

  const handleEnquireClick = (productName = '') => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal(`${data.name} Export Inquiry: ${productName}`);
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };

  // Filter 4 featured stones to present as export samples
  const exportStones = stones.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1C1C21] font-inter">

      {/* UNIQUE HERO BANNER SECTION (THEMED PER COUNTRY) */}
      <section className={`relative pt-32 pb-20 bg-gradient-to-br ${theme.heroBg} text-white overflow-hidden border-b border-white/10`}>
        {/* Glow ambient circle */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-8 uppercase tracking-widest">
            <button onClick={() => onNavigate && onNavigate('home')} className="hover:text-[#D4AF37] transition-colors">Home</button>
            <span>/</span>
            <span className="text-neutral-300">Export Destinations</span>
            <span>/</span>
            <span className="text-[#D4AF37] font-semibold">{data.name} Market</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              {/* Region Tag Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${theme.badgeBg} text-xs font-outfit font-bold uppercase tracking-widest shadow-md`}>
                <span className="text-base">{data.flag}</span>
                <Globe2 className="w-4 h-4" />
                {data.regionTag}
              </div>

              {/* Main H1 Title with Target Keywords */}
              <h1 className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-white">
                {data.heroHeading}
              </h1>

              <p className="font-inter text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
                {data.heroDesc}
              </p>

              <div className="pt-2 text-xs font-mono text-[#D4AF37] tracking-wider uppercase flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{theme.heroSubtitle}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => handleEnquireClick(`${data.name} Ocean Freight Pricing`)}
                  className="px-8 py-4 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Request {data.name} Quote</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="px-8 py-4 bg-transparent border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-outfit text-sm font-semibold uppercase tracking-wider rounded-lg transition-all duration-300"
                >
                  Contact Export Desk
                </button>
              </div>
            </div>

            {/* Quick Country Export Specs Card */}
            <div className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
              <h3 className="font-outfit text-xs tracking-widest uppercase text-[#D4AF37] font-bold pb-3 border-b border-white/10 flex items-center justify-between">
                <span>{data.name} Trade Highlights</span>
                <Ship className="w-4 h-4 text-[#D4AF37]" />
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-neutral-400 font-mono block uppercase">Primary Ports</span>
                  <span className="text-white font-semibold text-sm mt-0.5 block">{data.portsTable[0].port} & Terminals</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-neutral-400 font-mono block uppercase">Ocean Freight Transit</span>
                  <span className="text-[#D4AF37] font-semibold text-sm mt-0.5 block">{data.portsTable[0].transit} Average</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-neutral-400 font-mono block uppercase">Quality Certification</span>
                  <span className="text-white font-semibold text-sm mt-0.5 block">{data.specs[0].value}</span>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-neutral-400 font-mono block uppercase">Indian Loading Hubs</span>
                  <span className="text-white font-semibold text-sm mt-0.5 block">Mundra Port & Tuticorin Port</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COUNTRY TRADE METRICS BAR */}
      <section className="bg-[#111115] text-white py-8 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 border-r border-white/10 last:border-r-0">
            <span className="font-cormorant text-3xl md:text-4xl font-bold text-[#D4AF37] block">100%</span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mt-1 block">Factory Direct Sourcing</span>
          </div>
          <div className="p-4 border-r border-white/10 last:border-r-0">
            <span className="font-cormorant text-3xl md:text-4xl font-bold text-[#D4AF37] block">{data.portsTable[0].transit}</span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mt-1 block">Ocean Transit Time</span>
          </div>
          <div className="p-4 border-r border-white/10 last:border-r-0">
            <span className="font-cormorant text-3xl md:text-4xl font-bold text-[#D4AF37] block">±0.5mm</span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mt-1 block">Calibration Tolerance</span>
          </div>
          <div className="p-4">
            <span className="font-cormorant text-3xl md:text-4xl font-bold text-[#D4AF37] block">ISPM-15</span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mt-1 block">Wooden A-Frame Lashing</span>
          </div>
        </div>
      </section>

      {/* CORE SEO CONTENT & KEYWORD SECTION */}
      <section className="py-20 bg-white border-b border-[#E5E0D5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#B58D1E] font-outfit text-xs tracking-widest uppercase font-bold">
              B2B Trade Supply | India &rarr; {data.name}
            </span>
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-medium text-[#1C1C21] leading-tight">
              Leading <strong className="font-semibold text-[#1C1C21]">Marble Exporter from India</strong> & Premier <strong className="font-semibold text-[#1C1C21]">Granite Exporter from India</strong>
            </h2>
            <p className="font-inter text-base md:text-lg text-[#52525C] leading-relaxed font-normal text-left sm:text-center">
              {data.overview}
            </p>
            <div className="p-6 bg-[#FAF9F6] border border-[#EADCC9] rounded-xl text-left font-inter text-sm md:text-base text-[#4E4E59] leading-relaxed space-y-3 shadow-xs">
              <p>
                As an established <strong className="text-[#1C1C21] font-semibold">Indian marble exporter</strong> and trusted <strong className="text-[#1C1C21] font-semibold">Indian granite supplier</strong>, Pyros Surfaces extracts high-grade stone blocks from quarries in Rajasthan and South India. Our gangsaw processing yards operate state-of-the-art Italian machinery to fulfill bulk trade orders as a top <strong className="text-[#1C1C21] font-semibold">natural stone exporter India</strong>.
              </p>
              <p>
                {data.seoParagraph2}
              </p>
              <p>
                Whether sourcing as a <strong className="text-[#1C1C21] font-semibold">marble supplier India</strong> or partnering with a top <strong className="text-[#1C1C21] font-semibold">granite manufacturer India</strong>, our trade desk provides complete quarry inspection certificates, ISPM-15 wood packaging, and full container tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATION SEA PORTS MATRIX TABLE (UNIQUE PER COUNTRY) */}
      <section className="py-20 bg-[#F5F2EC] border-b border-[#E2D9CC]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="font-outfit text-xs md:text-sm tracking-[0.2em] text-[#B58D1E] uppercase font-bold">
              Maritime Shipping Corridors
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#1C1C21]">
              Target Ocean Sea Ports in {data.name}
            </h2>
            <p className="font-inter text-sm md:text-base text-[#52525C]">
              Direct Full Container Load (FCL) dispatches from Mundra Port (Gujarat) and Tuticorin Port (Tamil Nadu).
            </p>
          </div>

          <div className="bg-white border border-[#E2D9CC] rounded-2xl overflow-hidden shadow-md max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1C1C21] text-white font-outfit text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 border-b border-neutral-700">Destination Port</th>
                    <th className="py-4 px-6 border-b border-neutral-700">Region / State</th>
                    <th className="py-4 px-6 border-b border-neutral-700">Transit Duration</th>
                    <th className="py-4 px-6 border-b border-neutral-700">Vessel Frequency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2D9CC] font-inter text-xs md:text-sm text-[#33333B]">
                  {data.portsTable.map((pt, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF9F6] transition-colors">
                      <td className="py-4 px-6 font-bold text-[#1C1C21] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#B58D1E] shrink-0" />
                        <span>{pt.port}</span>
                      </td>
                      <td className="py-4 px-6">{pt.state}</td>
                      <td className="py-4 px-6 font-mono font-semibold text-[#B58D1E]">{pt.transit}</td>
                      <td className="py-4 px-6">
                        <span className="inline-block px-2.5 py-1 rounded bg-[#D4AF37]/15 text-[#856510] font-mono text-[11px] font-bold">
                          {pt.freq}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS & STANDARDS GRID (UNIQUE PER COUNTRY) */}
      <section className="py-24 bg-white border-b border-[#E2D9CC]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-outfit text-xs md:text-sm tracking-[0.2em] text-[#B58D1E] uppercase font-bold">
              Compliance & Quality Assurance
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#1C1C21]">
              Technical Specifications for {data.name} Exports
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.specs.map((spec, idx) => (
              <div 
                key={idx}
                className="bg-[#FAF9F6] border border-[#E5E0D5] rounded-xl p-6 shadow-sm hover:border-[#D4AF37] transition-all duration-300 space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/15 flex items-center justify-center text-[#B58D1E]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-outfit text-lg font-bold text-[#1C1C21]">
                  {spec.label}
                </h3>
                <p className="font-inter text-sm text-[#52525C] leading-relaxed font-normal">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPORT PRODUCT COLLECTION SHOWCASE */}
      <section className="py-24 bg-[#F5F2EC] border-b border-[#E2D9CC]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-outfit text-xs md:text-sm tracking-[0.2em] text-[#B58D1E] uppercase font-bold block mb-2">
                Export Collection
              </span>
              <h2 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#1C1C21]">
                Featured Natural Stone Range for {data.name}
              </h2>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('marble')}
              className="px-6 py-3 bg-neutral-900 hover:bg-[#D4AF37] hover:text-black text-white font-outfit text-xs font-bold uppercase tracking-wider rounded-md transition-colors self-start md:self-auto"
            >
              View Full Catalog &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {exportStones.map((stone) => (
              <div 
                key={stone.id} 
                className="bg-white border border-[#E5E0D5] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-neutral-200">
                  <img 
                    src={stone.image} 
                    alt={stone.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-mono px-2.5 py-1 rounded uppercase tracking-wider">
                    {stone.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-[#1C1C21] group-hover:text-[#B58D1E] transition-colors">
                      {stone.name}
                    </h3>
                    <p className="font-inter text-xs text-[#52525C] mt-2 line-clamp-2">
                      {stone.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleEnquireClick(`${stone.name} (${data.name} Order)`)}
                    className="w-full py-2.5 bg-[#FAF9F6] border border-[#D4AF37]/50 text-[#1C1C21] hover:bg-[#D4AF37] hover:text-black font-outfit text-xs font-bold uppercase tracking-wider rounded transition-all duration-300"
                  >
                    Inquire {data.name} Supply
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SEO FAQ ACCORDION */}
      <section className="py-20 bg-white border-y border-[#E2D9CC]">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="font-outfit text-xs md:text-sm tracking-[0.2em] text-[#B58D1E] uppercase font-bold block mb-2">
              Trade FAQ
            </span>
            <h3 className="font-cormorant text-3xl sm:text-4xl font-medium text-[#1C1C21]">
              Frequently Asked Questions on Exports to {data.name}
            </h3>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#FAF9F6] border border-[#E2D9CC] rounded-xl overflow-hidden shadow-xs transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-outfit text-base md:text-lg font-bold text-[#1C1C21]">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-[#B58D1E] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-base md:text-lg text-[#52525C] leading-relaxed font-normal border-t border-[#F0E8DC]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SEO KEYWORD TAG CLOUD */}
      <section className="py-16 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8E8E93] block mb-6">
            Core Target Capabilities & Trade Keywords ({data.name})
          </span>
          <div className="flex flex-wrap justify-center gap-2.5">
            {[...data.mainKeywords, ...data.countryKeywords].map((tag, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 rounded-full bg-white border border-[#E2D9CC] text-xs font-medium text-[#4E4E59] shadow-2xs hover:border-[#D4AF37] hover:text-[#1C1C21] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
