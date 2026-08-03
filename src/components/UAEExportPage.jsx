import React, { useState } from 'react';
import { CheckCircle2, Ship, MapPin, ChevronDown, ArrowRight, Landmark, PackageCheck, Truck } from 'lucide-react';

export default function UAEExportPage({ onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleEnquire = () => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal('UAE Export Inquiry');
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };

  const faqs = [
    {
      q: "What is the transit time for marble export from India to UAE?",
      a: "Mundra Port to Jebel Ali Port, Dubai is approximately 5–6 days. Container loading is done with ISPM-15 fumigated wooden A-frames and airbag void-fillers to ensure zero movement during sea transit."
    },
    {
      q: "Do you comply with UAE Municipality and ESMA standards?",
      a: "Yes. As a trusted marble exporter from India and granite exporter from India to UAE, we supply material tested to UAE Municipality's quality benchmarks and provide all required certificates including CoO, Test Reports, and Packing Lists."
    },
    {
      q: "What sizes of granite tiles are available for Dubai projects?",
      a: "We offer 30x30, 60x30, 60x60, 80x80, and 60x120cm calibrated granite tiles (±0.5mm) and custom cut-to-size slabs for Dubai-based developers and fit-out contractors."
    },
    {
      q: "Can you supply marble slabs for Expo-City and D33 developments?",
      a: "Absolutely. Pyros is an active Indian marble exporter and natural stone exporter India serving UAE real estate developers and government projects in Dubai, Abu Dhabi, Sharjah, and Ras Al Khaimah."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1C1C21] min-h-screen">

      {/* ─── BANNER ─── */}
      <div className="bg-[#1C1C21] text-white pt-28 pb-16 px-6 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-md text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            🇦🇪 Jebel Ali Direct — UAE Stone Export Desk
          </div>

          <h1 className="font-cormorant text-4xl sm:text-6xl font-semibold leading-tight">
            Marble Exporter India to UAE
          </h1>

          <button onClick={handleEnquire} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all">
            Request UAE Export Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ─── UAE Project Applications ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">UAE Real Estate & Hospitality Supply</span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-2">
            Where Our Stone Ships in the UAE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Landmark,
              city: "Dubai",
              title: "Luxury & Commercial Fit-outs",
              body: "White marble gangsaw slabs and black granite tile for Dubai Marina towers, JBR hospitality, and Downtown boutique hotels. Marble tiles exporter certified for Dubai Municipality compliance."
            },
            {
              icon: PackageCheck,
              city: "Abu Dhabi",
              title: "Government & Cultural Projects",
              body: "Calibrated granite tiles for Abu Dhabi corniche promenades, Louvre Abu Dhabi surrounds, and government ministry interior flooring. Natural stone exporter India for UAE capital flagship projects."
            },
            {
              icon: Truck,
              city: "Sharjah & RAK",
              title: "Industrial & Residential Supply",
              body: "Cost-optimized granite slabs supplier services for Sharjah industrial parks, Ras Al Khaimah villa complexes, and large volume residential developers requiring 1–5 FCL monthly contracts."
            }
          ].map((item, i) => (
            <div key={i} className="relative bg-white border border-[#E5E0D5] rounded-2xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 transition-colors">
                <item.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <span className="text-[10px] font-mono text-[#D4AF37] font-bold uppercase tracking-widest">{item.city}</span>
              <h3 className="font-outfit text-xl font-bold text-[#1C1C21] mt-1 mb-3">{item.title}</h3>
              <p className="font-inter text-sm text-[#52525C] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>


      {/* ─── Keyword-Rich Content Section ─── */}
      <div className="bg-white border-t border-[#E2D9CC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Intro Block */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">
              Marble Exporter India to UAE — Granite Exporter India to UAE
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-3 mb-5 leading-tight">
              India's Leading Natural Stone Exporter for Dubai & UAE Developments
            </h2>
            <p className="font-inter text-base text-[#52525C] leading-relaxed mb-4">
              Pyros Surfaces is a trusted <strong className="text-[#1C1C21]">marble exporter from India</strong> and premier <strong className="text-[#1C1C21]">granite exporter from India</strong> supplying luxury real estate in Dubai, Abu Dhabi, and Sharjah. As an established <strong className="text-[#1C1C21]">Indian marble exporter</strong> and <strong className="text-[#1C1C21]">Indian granite supplier</strong>, we deliver Italian gangsaw 20mm and 30mm slabs directly to Jebel Ali Port in 5–6 days.
            </p>
            <p className="font-inter text-base text-[#52525C] leading-relaxed">
              Functioning as a certified <strong className="text-[#1C1C21]">natural stone exporter India</strong> and <strong className="text-[#1C1C21]">marble supplier India</strong>, Pyros produces mirror-polished slabs and calibrated tiles. Our factory is a recognized <strong className="text-[#1C1C21]">granite manufacturer India</strong> with full ESMA and UAE Municipality compliance documentation.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                cat: "Marble Slabs Exporter",
                title: "White Marble Slabs — Dubai Lobbies",
                body: "As a marble slabs exporter to the UAE, Pyros supplies 20mm & 30mm Kishangarh White and Makrana marble gangsaw slabs for luxury hotel lobbies in Dubai Marina and Downtown Dubai towers."
              },
              {
                cat: "Granite Slabs Supplier",
                title: "Black & Steel Grey Granite Slabs",
                body: "Our granite slabs supplier unit exports Absolute Black, Black Galaxy, and Steel Grey gangsaw slabs with ±1mm calibration for UAE commercial tower facades and hotel reception counters."
              },
              {
                cat: "Marble Tiles Exporter",
                title: "Calibrated Marble Floor Tiles",
                body: "As a marble tiles exporter to UAE contractors, we manufacture 60x60cm and 80x80cm polished and honed marble tiles for Abu Dhabi luxury villa developments and Ras Al Khaimah resorts."
              },
              {
                cat: "Granite Tiles Exporter",
                title: "Granite Tiles for UAE Plazas",
                body: "Our granite tiles exporter line produces 30x30, 60x60, and 60x120cm flamed and polished granite tiles for Sharjah commercial plazas and Dubai promenade outdoor landscaping."
              },
              {
                cat: "Marble Exporter India to UAE",
                title: "Fast 5-Day Jebel Ali Marble Delivery",
                body: "Pyros operates as a top marble exporter India to UAE, offering rapid 5–6 day ocean shipping from Mundra to Jebel Ali Port with ISPM-15 wooden A-frames and ESMA certification."
              },
              {
                cat: "Granite Exporter India to UAE",
                title: "Granite Supply — Abu Dhabi & Sharjah",
                body: "As a granite exporter India to UAE, Pyros fulfills multi-container FCL contracts for commercial building contractors in Khalifa Port Abu Dhabi and Sharjah industrial parks."
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
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">UAE Trade FAQ</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#1C1C21] mt-2">
              Frequently Asked Questions — UAE Export
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
          {["marble exporter from India","granite exporter from India","Indian marble exporter","Indian granite supplier","natural stone exporter India","marble supplier India","granite manufacturer India","marble slabs exporter","granite slabs supplier","marble tiles exporter","granite tiles exporter","Marble exporter India to UAE","Granite exporter India to UAE"].map((tag, i) => (
            <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2D9CC] text-xs font-medium text-[#4E4E59] hover:border-[#D4AF37] transition-colors">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
