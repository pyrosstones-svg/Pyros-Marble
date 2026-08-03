import React, { useState } from 'react';
import { CheckCircle2, Ship, MapPin, ChevronDown, ArrowRight, Layers, Building2, ShieldCheck } from 'lucide-react';

export default function SaudiExportPage({ onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleEnquire = () => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal('Saudi Arabia KSA Export Inquiry');
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };

  const faqs = [
    {
      q: "What is the container capacity for marble export to Saudi Arabia?",
      a: "We load up to 26.5 Metric Tons per 20-foot heavy-load container with ISPM-15 fumigated wooden A-frame bundles directly to Jeddah Islamic Port and King Abdulaziz Port Dammam."
    },
    {
      q: "Do you provide SASO & SABER certification for KSA exports?",
      a: "Yes. As a dedicated marble exporter from India and granite exporter from India to Saudi Arabia, we provide 100% pre-approved SABER platform certificates and SASO-compliant quality documentation for seamless customs clearance."
    },
    {
      q: "What marble and granite varieties are exported to Saudi Arabia?",
      a: "We supply White Marble (Kishangarh), Absolute Black, Black Galaxy, Tan Brown, Steel Grey, and Viscon White in 20mm & 30mm gangsaw slabs and 30x30 to 120x60cm calibrated tiles."
    },
    {
      q: "Which Saudi ports do you ship to directly?",
      a: "Jeddah Islamic Port (7 days transit), King Abdulaziz Port Dammam (9 days), and Yanbu Commercial Port (8 days) — all loaded from Mundra Port, India."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1C1C21] min-h-screen">

      {/* ─── BANNER — Same structure as MarblePage ─── */}
      <div className="bg-[#1C1C21] text-white pt-28 pb-16 px-6 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-md text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            🇸🇦 SASO & SABER Verified — KSA Export Desk
          </div>

          <h1 className="font-cormorant text-4xl sm:text-6xl font-semibold leading-tight">
            Marble Exporter India to Saudi Arabia
          </h1>

          <button
            onClick={handleEnquire}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all"
          >
            Request KSA Export Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ─── SECTION 1: Vision 2030 Project Supply ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Vision 2030 Mega Project Desk</span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-2">
            Natural Stone Supply for KSA Developments
          </h2>
          <p className="font-inter text-base text-[#52525C] mt-4 max-w-3xl mx-auto leading-relaxed">
            As a recognized <strong className="text-[#1C1C21]">natural stone exporter India</strong> and top <strong className="text-[#1C1C21]">granite manufacturer India</strong>, Pyros supplies raw blocks extracted from captive Rajasthan & South Indian quarries, sliced on Italian diamond gangsaw machines into 20mm and 30mm slabs for KSA construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { region: "Tabuk Region", project: "NEOM Mega City", detail: "20mm & 30mm white marble gangsaw slabs for luxury residential and administrative towers." },
            { region: "Coastal Luxury", project: "Red Sea Global", detail: "Salt-resistant granite pavers and premium white marble slabs for ultra-luxury island resorts." },
            { region: "Riyadh Region", project: "Qiddiya & Diriyah", detail: "60x60 & 60x120cm calibrated granite tiles for heritage plazas and entertainment districts." },
            { region: "Commercial Hubs", project: "Riyadh & Jeddah", detail: "Commercial tower facade granite cladding and high-traffic hotel flooring with SASO certification." }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#E5E0D5] rounded-xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase tracking-widest">{item.region}</span>
              <h3 className="font-outfit text-lg font-bold text-[#1C1C21] mt-1 mb-3 group-hover:text-[#D4AF37] transition-colors">{item.project}</h3>
              <p className="font-inter text-sm text-[#52525C] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>


      {/* ─── SECTION 3: Products (Slabs & Tiles) ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Marble Slabs Exporter & Granite Slabs Supplier</span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21]">
              Factory-Direct Slabs & Calibrated Tiles for KSA
            </h2>
            <p className="font-inter text-base text-[#52525C] leading-relaxed">
              As a leading <strong className="text-[#1C1C21]">marble slabs exporter</strong> and <strong className="text-[#1C1C21]">granite slabs supplier</strong>, Pyros processes raw blocks in Rajasthan & South India into 20mm and 30mm gangsaw slabs with 95+ gloss polish. For Saudi commercial contractors, we operate as a recognized <strong className="text-[#1C1C21]">marble tiles exporter</strong> and <strong className="text-[#1C1C21]">granite tiles exporter</strong>, manufacturing 30x30, 60x30, 60x60, 80x80, and 60x120cm calibrated tiles.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              {["White Marble Gangsaw Slabs", "Absolute Black Granite Slabs", "Black Galaxy Slabs", "Steel Grey Granite Tiles", "Tan Brown Tiles", "Viscon White Slabs"].map((v, i) => (
                <div key={i} className="flex items-center gap-2 text-[#52525C]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{v}</span>
                </div>
              ))}
            </div>

            <button onClick={handleEnquire} className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg transition-all shadow-md">
              Request Product Specifications <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-[#1C1C21] rounded-2xl p-8 text-white space-y-5">
            <h3 className="font-outfit text-sm font-bold text-[#D4AF37] uppercase tracking-widest">Saudi Arabia Export Compliance</h3>
            <div className="space-y-4 text-sm">
              {[
                { label: "SABER Platform", value: "100% Pre-Approved Certificate" },
                { label: "Max Container Weight", value: "26.5 Metric Tons" },
                { label: "Surface Finish", value: "Mirror Polish / Honed / Leathered" },
                { label: "Tile Calibration", value: "±0.5mm Thickness Tolerance" },
                { label: "Packaging", value: "ISPM-15 Fumigated Wooden A-Frames" },
                { label: "Marble Supplier India", value: "Kishangarh, Rajsamand Quarries" }
              ].map((row, i) => (
                <div key={i} className="flex justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="text-neutral-400">{row.label}</span>
                  <span className="font-semibold text-white text-right max-w-[55%]">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Keyword-Rich Content Section ─── */}
      <div className="bg-white border-t border-[#E2D9CC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Intro Block */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">
              Marble Exporter India to Saudi Arabia — Granite Exporter India to Saudi Arabia
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-3 mb-5 leading-tight">
              India's Premier Natural Stone Exporter for the Kingdom of Saudi Arabia
            </h2>
            <p className="font-inter text-base text-[#52525C] leading-relaxed mb-4">
              Pyros Surfaces is a leading <strong className="text-[#1C1C21]">marble exporter from India</strong> and <strong className="text-[#1C1C21]">granite exporter from India</strong> supplying Saudi Arabia's Vision 2030 developments. As an established <strong className="text-[#1C1C21]">Indian marble exporter</strong> and <strong className="text-[#1C1C21]">Indian granite supplier</strong>, we process raw blocks from captive Rajasthan and South Indian quarries into 20mm and 30mm gangsaw slabs for Riyadh, Jeddah, and Dammam.
            </p>
            <p className="font-inter text-base text-[#52525C] leading-relaxed">
              Serving as a trusted <strong className="text-[#1C1C21]">natural stone exporter India</strong> and <strong className="text-[#1C1C21]">marble supplier India</strong>, Pyros operates Italian gangsaw lines with 95+ gloss luster polish. Our factory is a recognized <strong className="text-[#1C1C21]">granite manufacturer India</strong> providing 100% SASO and SABER certified natural stone packaging for KSA customs.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                cat: "Marble Slabs Exporter",
                title: "White & Beige KSA Marble Slabs",
                body: "As a dedicated marble slabs exporter to KSA, Pyros supplies 20mm & 30mm gangsaw Kishangarh white marble and Makrana slabs for luxury hotels, royal palaces, and residential villas in Riyadh and Jeddah."
              },
              {
                cat: "Granite Slabs Supplier",
                title: "Black & Steel Grey Granite Slabs",
                body: "Our granite slabs supplier operations process Absolute Black, Black Galaxy, and Steel Grey gangsaw slabs at ±1mm tolerance for Saudi commercial tower facades and high-traffic flooring."
              },
              {
                cat: "Marble Tiles Exporter",
                title: "Calibrated Marble Floor Tiles",
                body: "As a marble tiles exporter to Saudi Arabia, we supply 60x60cm, 80x80cm, and 60x120cm calibrated marble tiles with SABER certificate for Saudi commercial developments."
              },
              {
                cat: "Granite Tiles Exporter",
                title: "Heavy-Duty Granite Tiles for KSA",
                body: "Our granite tiles exporter line offers 30x30 to 60x120cm flamed, polished, and honed granite tiles for NEOM infrastructure plazas, Red Sea resorts, and Dammam public projects."
              },
              {
                cat: "Marble Exporter India to Saudi Arabia",
                title: "SABER Certified White Marble Slabs",
                body: "Pyros is a verified marble exporter India to Saudi Arabia delivering direct FCL containers to Jeddah Islamic Port and King Abdulaziz Port Dammam with full SASO quality clearance."
              },
              {
                cat: "Granite Exporter India to Saudi Arabia",
                title: "Commercial Granite for Vision 2030",
                body: "As a granite exporter India to Saudi Arabia, we supply mega-projects across Tabuk, Diriyah, and Riyadh with heavy-load 26.5 MT container shipments and ISPM-15 wooden A-frames."
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#FAF9F6] border border-[#E5E0D5] rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase tracking-widest block mb-2">{item.cat}</span>
                <h3 className="font-outfit text-lg font-bold text-[#1C1C21] mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="font-inter text-sm text-[#52525C] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 4: FAQ ─── */}
      <div className="bg-[#F5F2EC] py-20 px-6 border-t border-[#E2D9CC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Saudi Arabia Trade FAQ</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#1C1C21] mt-2">
              Frequently Asked Questions — KSA Export
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-[#E2D9CC] rounded-xl overflow-hidden shadow-xs">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-outfit text-base font-bold text-[#1C1C21]">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#52525C] leading-relaxed border-t border-[#F0E8DC]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SEO Keyword Tags ─── */}
      <div className="py-10 border-t border-[#E2D9CC] text-center px-6">
        <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {["marble exporter from India","granite exporter from India","Indian marble exporter","Indian granite supplier","natural stone exporter India","marble supplier India","granite manufacturer India","marble slabs exporter","granite slabs supplier","marble tiles exporter","granite tiles exporter","Marble exporter India to Saudi Arabia","Granite exporter India to Saudi Arabia"].map((tag, i) => (
            <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2D9CC] text-xs font-medium text-[#4E4E59] hover:border-[#D4AF37] transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
