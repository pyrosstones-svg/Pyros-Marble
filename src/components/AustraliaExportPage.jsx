import React, { useState } from 'react';
import { CheckCircle2, Ship, MapPin, ChevronDown, ArrowRight, Waves, Sun, Droplets } from 'lucide-react';

export default function AustraliaExportPage({ onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleEnquire = () => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal('Australia Export Inquiry');
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };

  const faqs = [
    {
      q: "What are Australia's biosecurity requirements for stone imports from India?",
      a: "Australia's DAFF (Dept of Agriculture, Fisheries and Forestry) requires all wooden packing material to be ISPM-15 fumigated. Pyros provides ISPM-15 compliant A-frame wooden bundles and crates, and prepares all phytosanitary certificates as a certified marble exporter from India to Australia."
    },
    {
      q: "Is there duty on Indian marble and granite under the India-Australia ECTA?",
      a: "Under the India-Australia Economic Cooperation and Trade Agreement (ECTA), Indian natural stone including marble slabs, granite slabs, and stone tiles benefits from significantly reduced tariff rates. As an Indian marble exporter and granite exporter from India, we supply ECTA-origin certified goods to Australian importers."
    },
    {
      q: "Which Australian ports does your marble ship to?",
      a: "We ship to Melbourne Port (Swanson Dock), Sydney Port Botany, Brisbane Fisherman Islands Port, Fremantle Port (Perth), and Adelaide Outer Harbor — transit time 16–22 days from Nhava Sheva / Mundra port."
    },
    {
      q: "Do you supply marble and granite for Australian home builders and developers?",
      a: "Yes. Pyros is a preferred marble supplier India and granite slabs supplier for Australian volume home builders, kitchen and bathroom renovation specialists, commercial interior designers, and large residential estate developers in Victoria, NSW, Queensland, and WA."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1C1C21] min-h-screen">

      {/* ─── BANNER ─── */}
      <div className="bg-[#1C1C21] text-white pt-28 pb-16 px-6 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-md text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            🇦🇺 India-Australia ECTA — Stone Export Desk
          </div>

          <h1 className="font-cormorant text-4xl sm:text-6xl font-semibold leading-tight">
            Marble Exporter from India to Australia
          </h1>

          <div className="flex flex-wrap justify-center gap-4 pt-1">
            <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> 5 Major AU Ports Served
            </span>
          </div>


          <button onClick={handleEnquire} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all">
            Request Australia Export Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>


      {/* ─── AU Applications ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Australian Stone Applications</span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-2">
            Where Indian Stone is Used in Australia
          </h2>
          <p className="font-inter text-base text-[#52525C] mt-4 max-w-3xl mx-auto">
            As a <strong className="text-[#1C1C21]">marble slabs exporter</strong> and <strong className="text-[#1C1C21]">granite tiles exporter</strong>, Pyros serves four distinct Australian buyer segments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Sun,
              state: "Victoria & NSW",
              title: "Volume Home Builders",
              body: "Wholesale Italian-gangsaw white marble slabs and 60x60cm calibrated grey granite tiles for Melbourne and Sydney volume house builders supplying master bath vanity tops, kitchen islands, and outdoor entertaining areas."
            },
            {
              icon: Waves,
              state: "Queensland",
              title: "Coastal Luxury Hospitality",
              body: "Premium pool-surround granite pavers (flamed finish) and honed marble for Gold Coast and Sunshine Coast five-star hotel pool decks, lobbies, and spa facilities. Granite slabs supplier for tropical climate applications."
            },
            {
              icon: Droplets,
              state: "Western Australia",
              title: "Mining & Commercial Sector",
              body: "Heavy-duty granite flooring tiles for Perth commercial offices, Pilbara mining company headquarters, and high-traffic institutional buildings. Indian granite supplier for WA's growing commercial construction market."
            },
            {
              icon: Ship,
              state: "South Australia",
              title: "Stone Importers & Distributors",
              body: "Wholesale supply to Adelaide stone distribution warehouses. Natural stone exporter India FCL direct supply to SA-based distributors supplying the SA construction and renovation industries."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#E5E0D5] rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group flex gap-6">
              <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                <item.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase tracking-widest">{item.state}</span>
                <h3 className="font-outfit text-xl font-bold text-[#1C1C21] mt-1 mb-3 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
                <p className="font-inter text-sm text-[#52525C] leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* ─── ECTA Advantage ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">India-Australia ECTA Trade Agreement</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#1C1C21] mt-2 mb-4">
              ECTA Benefit: Reduced Duty on Indian Stone
            </h2>
            <p className="font-inter text-sm text-[#52525C] leading-relaxed mb-5">
              The India-Australia ECTA (Interim Trade Agreement) provides significant duty concessions on Indian natural stone exports to Australia, making Pyros as your <strong className="text-[#1C1C21]">Indian marble exporter</strong> and <strong className="text-[#1C1C21]">granite manufacturer India</strong> more cost-competitive than non-ECTA-country suppliers.
            </p>
            <div className="space-y-3">
              {[
                "EUR.1 Certificate of Origin provided for ECTA tariff benefit",
                "ISPM-15 DAFF biosecurity compliant wooden packaging",
                "Full phytosanitary documentation for all shipments",
                "ECTA tariff reduction on marble tiles and granite tiles export"
              ].map((pt, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#52525C]">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1C1C21] text-white rounded-2xl p-8 space-y-4">
            <h3 className="font-outfit text-sm font-bold text-[#D4AF37] uppercase tracking-widest">Australia Export Compliance Summary</h3>
            <div className="space-y-3 text-sm">
              {[
                { label: "DAFF Biosecurity", value: "ISPM-15 Fumigated Crates" },
                { label: "Trade Agreement", value: "India-AU ECTA (Active)" },
                { label: "Origin Cert", value: "EUR.1 / CoO for ECTA" },
                { label: "Marble Tiles Exporter Size", value: "30x30 to 120x60cm" },
                { label: "Granite Tiles Exporter Size", value: "30x30 to 80x80cm" },
                { label: "Surface Finish", value: "Polished, Honed, Flamed, Brushed" }
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
              Marble Exporter India to Australia — Granite Exporter India to Australia
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-3 mb-5 leading-tight">
              India's Trusted Natural Stone Exporter for the Australian Market
            </h2>
            <p className="font-inter text-base text-[#52525C] leading-relaxed mb-4">
              Pyros Surfaces is a certified <strong className="text-[#1C1C21]">marble exporter from India</strong> and <strong className="text-[#1C1C21]">granite exporter from India</strong> serving Australian importers, kitchen &amp; bath distributors, and volume home builders. As Australia's preferred <strong className="text-[#1C1C21]">Indian marble exporter</strong> and <strong className="text-[#1C1C21]">Indian granite supplier</strong>, we supply quarry-direct slabs and calibrated tiles under the India-Australia ECTA trade framework.
            </p>
            <p className="font-inter text-base text-[#52525C] leading-relaxed">
              As a leading <strong className="text-[#1C1C21]">natural stone exporter India</strong> and <strong className="text-[#1C1C21]">marble supplier India</strong>, Pyros operates Italian diamond gangsaw processing lines in Rajasthan that produce 20mm and 30mm slabs with 95+ gloss polish. Our factory is a recognized <strong className="text-[#1C1C21]">granite manufacturer India</strong> with full DAFF biosecurity and ECTA-origin documentation for all Australian shipments.
            </p>
          </div>

          {/* Stone Varieties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {[
              {
                cat: "Marble Slabs Exporter",
                title: "White & Beige Marble Slabs",
                body: "As a dedicated marble slabs exporter to Australia, Pyros supplies 20mm & 30mm Italian-gangsaw Indian white marble pure white slabs for Melbourne and Sydney luxury interiors, hotel lobbies, and residential bathroom vanity tops."
              },
              {
                cat: "Granite Slabs Supplier",
                title: "Black & Grey Granite Gangsaw Slabs",
                body: "Our granite slabs supplier operation processes Absolute Black, Steel Grey, and Black Galaxy gangsaw slabs from South Indian quarries at ±1mm calibration for Australian kitchen countertop fabricators and commercial flooring contractors."
              },
              {
                cat: "Marble Tiles Exporter",
                title: "Calibrated Marble Floor Tiles",
                body: "As a marble tiles exporter to Australia, we supply 60x60cm and 60x30cm calibrated marble tiles in high-gloss and honed finishes for Queensland coastal hospitality, NSW apartment complexes, and Victorian high-end residential projects."
              },
              {
                cat: "Granite Tiles Exporter",
                title: "Heavy-Duty Granite Floor Tiles",
                body: "Our granite tiles exporter line covers 30x30 to 80x80cm calibrated granite tiles in flamed, polished, and brushed finishes for WA commercial offices, Adelaide industrial facilities, and outdoor Australian patio and pool areas."
              },
              {
                cat: "Marble Exporter India to Australia",
                title: "White Marble — Melbourne & Sydney",
                body: "As a certified marble exporter India to Australia under ECTA, Pyros ships direct FCL to Melbourne Swanson Dock and Sydney Port Botany. Transit: 16–19 days from Mundra/Nhava Sheva with full ISPM-15 and DAFF biosecurity compliance."
              },
              {
                cat: "Granite Exporter India to Australia",
                title: "Granite — Perth, Brisbane & Adelaide",
                body: "Pyros is a granite exporter India to Australia serving Perth (Fremantle Port, 14–16 days), Brisbane (Fisherman Islands, 18–20 days) and Adelaide (Outer Harbor, 18–22 days) with commercial and residential grade South Indian granite."
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

      {/* ─── FAQ ─── */}

      <div className="bg-[#F5F2EC] py-20 px-6 border-t border-[#E2D9CC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Australia Import FAQ</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#1C1C21] mt-2">
              Frequently Asked Questions — Australia Export
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-[#E2D9CC] rounded-xl overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} className="w-full px-6 py-5 text-left flex items-center justify-between gap-4">
                  <span className="font-outfit text-base font-bold text-[#1C1C21]">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#52525C] leading-relaxed border-t border-[#F0E8DC]">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SEO Tags ─── */}
      <div className="py-10 border-t border-[#E2D9CC] text-center px-6">
        <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
          {["marble exporter from India", "granite exporter from India", "Indian marble exporter", "Indian granite supplier", "natural stone exporter India", "marble supplier India", "granite manufacturer India", "marble slabs exporter", "granite slabs supplier", "marble tiles exporter", "granite tiles exporter", "Marble exporter India to Australia", "Granite exporter India to Australia"].map((tag, i) => (
            <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2D9CC] text-xs font-medium text-[#4E4E59] hover:border-[#D4AF37] transition-colors">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
