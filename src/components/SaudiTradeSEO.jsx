import React, { useState } from 'react';
import { Ship, CheckCircle2, Award, ShieldCheck, Globe2, ChevronDown, Building2, MapPin, Truck, Layers } from 'lucide-react';

export default function SaudiTradeSEO({ onEnquireClick }) {
  const [activeFaq, setActiveFaq] = useState(0);

  const keywordsList = [
    "Marble Exporter from India",
    "Granite Exporter from India",
    "Indian Marble Exporter",
    "Indian Granite Supplier",
    "Natural Stone Exporter India",
    "Marble Supplier India",
    "Granite Manufacturer India",
    "Marble Slabs Exporter",
    "Granite Slabs Supplier",
    "Marble Tiles Exporter",
    "Granite Tiles Exporter",
    "Marble Exporter India to Saudi Arabia",
    "Granite Exporter India to Saudi Arabia"
  ];

  const tradeHighlights = [
    {
      title: "Direct Factory Sourcing from Rajasthan & South India",
      desc: "As a trusted Indian marble exporter and granite manufacturer India, we operate state-of-the-art gangsaw processing plants in Kishangarh, Rajsamand, and South Indian granite quarry belts. Our direct quarry ownership guarantees shade uniformity and monolithic slab consistency for large-scale international orders.",
      icon: Building2
    },
    {
      title: "Specialized Export Hub to Saudi Arabia (GCC Certified)",
      desc: "Recognized as a premier Marble exporter India to Saudi Arabia and Granite exporter India to Saudi Arabia, we comply strictly with SASO (Saudi Standards, Metrology and Quality Organization) and SABER e-platform certifications. Direct container freight dispatches to Jeddah Islamic Port, King Abdulaziz Port Dammam, and Yanbu Commercial Port.",
      icon: Ship
    },
    {
      title: "20mm & 30mm Gangsaw Slabs & Precision Cut Tiles",
      desc: "As an established marble slabs exporter and granite slabs supplier, all our stone blocks are sliced on high-precision Italian diamond gangsaws. We supply 20mm and 30mm calibrated slabs alongside custom marble tiles exporter specifications (60x60cm, 60x120cm, 120x240cm) engineered for extreme structural durability.",
      icon: Layers
    },
    {
      title: "Seaworthy Wooden Crate Packaging & Container Lashing",
      desc: "Every slab export order undergoes rigorous multi-stage quality checks, epoxy resin curing, and fumigated ISPM-15 compliant wooden A-frame lashing. This ensures 0% transit breakage across oceanic trade routes to Saudi Arabia, the Middle East, Europe, and the Americas.",
      icon: ShieldCheck
    }
  ];

  const faqs = [
    {
      question: "Why choose Pyros Surfaces as your Marble Exporter from India to Saudi Arabia?",
      answer: "Pyros Surfaces is an established Indian marble exporter offering end-to-end supply chain management for projects in Riyadh, Jeddah, Dammam, and NEOM. We manage quarry extraction, 20mm & 30mm gangsaw calibration, SASO/SABER export documentation, and direct port lashing from Mundra Port to Saudi Arabian sea ports with guaranteed shade matching."
    },
    {
      question: "What stone products do you manufacture as an Indian Granite Supplier?",
      answer: "As a top granite manufacturer India and granite slabs supplier, we produce Absolute Black, Black Galaxy, Tan Brown, Steel Grey, Alaska Gold, and Viscon White granite slabs and tiles. All products are available in 20mm and 30mm thicknesses with polished, leathered, honed, or flamed finishes."
    },
    {
      question: "What are the standard export sizes for marble tiles and granite tiles?",
      answer: "As a leading marble tiles exporter and granite tiles exporter, we produce standard sizes including 30x30cm, 60x30cm, 60x60cm, 80x80cm, and 60x120cm, with custom architectural dimensions available upon request. All tiles feature bevelled edges and micro-calibrated thickness tolerance within ±0.5mm."
    },
    {
      question: "How do you handle ocean freight shipping for granite & marble from India to Saudi Arabia?",
      answer: "We ship direct 20-foot heavy-load containers (up to 26.5 Metric Tons capacity) loaded with ISPM-15 fumigated wooden bundles. Port of loadings include Mundra (Gujarat) and Tuticorin/Chennai (Tamil Nadu), delivering directly to Jeddah, Dammam, and Yanbu ports with real-time container tracking."
    }
  ];

  return (
    <section className="py-24 bg-[#F5F2EC] text-[#1C1C21] border-y border-[#E2D9CC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Tag & Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16 reveal reveal-slide-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#B58D1E] font-outfit text-xs md:text-sm tracking-[0.25em] uppercase font-bold mb-4 shadow-xs">
            <Globe2 className="w-4 h-4 text-[#D4AF37]" />
            Global B2B Export Direct | India &rarr; Saudi Arabia & Worldwide
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-medium tracking-wide text-[#1C1C21] leading-tight mt-2">
            Premier Marble & Granite Exporter from India
          </h2>
          <p className="font-inter text-base md:text-xl text-[#4E4E59] font-normal leading-relaxed mt-6">
            Pyros Surfaces is a recognized <strong className="text-[#1C1C21] font-semibold">natural stone exporter India</strong> and premier <strong className="text-[#1C1C21] font-semibold">Indian granite supplier</strong>. We process, calibrate, and export world-class Indian marble slabs, granite slabs, marble tiles, and granite tiles directly to commercial contractors, luxury villa developers, and stone importers across Saudi Arabia and over 45 countries.
          </p>
        </div>

        {/* Trade Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {tradeHighlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-[#E5E0D5] rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#B58D1E] mb-6 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-outfit text-xl md:text-2xl font-bold text-[#1C1C21] mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-base md:text-lg text-[#52525C] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Saudi Arabia Export Showcase Card */}
        <div className="bg-gradient-to-br from-[#1C1C21] via-[#2A2A32] to-[#141418] text-white rounded-2xl p-8 md:p-12 shadow-2xl mb-20 border border-white/10 relative overflow-hidden">
          <div className="absolute -right-12 -bottom-12 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-widest">
                <MapPin className="w-3.5 h-3.5" /> Saudi Arabia Trade Corridor (KSA Exporter)
              </div>
              <h3 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-white">
                Dedicated Marble & Granite Exporter India to Saudi Arabia
              </h3>
              <p className="font-inter text-base md:text-lg text-neutral-300 font-normal leading-relaxed">
                As an accredited <strong className="text-white font-semibold">Marble exporter India to Saudi Arabia</strong> and <strong className="text-white font-semibold">Granite exporter India to Saudi Arabia</strong>, we streamline raw material procurement for Saudi Mega Projects including Neom, Red Sea Global, Qiddiya, and luxury residential estates in Riyadh and Jeddah. We ensure 100% SASO compliant packing and SABER certificates for seamless customs clearance.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                <div>
                  <span className="text-xs text-neutral-400 font-mono uppercase block">Target Ports</span>
                  <span className="text-sm font-semibold text-white mt-1 block">Jeddah / Dammam</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono uppercase block">Slab Thickness</span>
                  <span className="text-sm font-semibold text-[#D4AF37] mt-1 block">20mm & 30mm</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono uppercase block">Certification</span>
                  <span className="text-sm font-semibold text-white mt-1 block">SASO / SABER</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-400 font-mono uppercase block">Loading Port</span>
                  <span className="text-sm font-semibold text-white mt-1 block">Mundra / Tuticorin</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <button
                onClick={() => onEnquireClick('Saudi Arabia Bulk Export')}
                className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300 text-center"
              >
                Request KSA Export Quote
              </button>
              <span className="text-xs text-neutral-400 font-mono mt-3">Direct Container Freight Pricing</span>
            </div>
          </div>
        </div>

        {/* SEO FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="font-outfit text-xs md:text-sm tracking-[0.2em] text-[#B58D1E] uppercase font-bold block mb-2">Export FAQ</span>
            <h3 className="font-cormorant text-3xl sm:text-4xl font-medium text-[#1C1C21]">
              Frequently Asked Questions on Natural Stone Exports
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-[#E2D9CC] rounded-xl overflow-hidden shadow-xs transition-all duration-300"
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

        {/* SEO Keywords Tag Cloud */}
        <div className="pt-10 border-t border-[#E2D9CC] text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8E8E93] block mb-4">Core Export Capabilities & Trade Tags</span>
          <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {keywordsList.map((tag, idx) => (
              <span 
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2D9CC] text-xs font-medium text-[#4E4E59] shadow-2xs hover:border-[#D4AF37] hover:text-[#1C1C21] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
