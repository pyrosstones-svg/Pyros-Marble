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
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-md text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
              🇦🇪 Jebel Ali Direct — UAE Stone Export Desk
            </div>

            <h1 className="font-cormorant text-4xl sm:text-6xl font-semibold leading-tight">
              Marble Exporter India to UAE
            </h1>
            <p className="font-outfit text-xl sm:text-2xl text-[#D4AF37] font-semibold leading-snug">
              Granite Exporter India to UAE — Dubai, Abu Dhabi, Sharjah
            </p>

            <p className="font-inter text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Pyros Surfaces is a premium <strong className="text-white">Indian marble exporter</strong> and <strong className="text-white">granite manufacturer India</strong>, supplying Dubai Expo City, D33 economy projects, Abu Dhabi Corniche developments, and luxury hotel fit-outs across the United Arab Emirates.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <span className="text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 5–6 Days to Jebel Ali
              </span>
              <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> UAE Municipality Compliant
              </span>
              <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> ESMA Certified
              </span>
            </div>

            <button onClick={handleEnquire} className="mt-2 inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all">
              Request UAE Export Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="w-full lg:w-96 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-4 text-left">
            <h3 className="font-outfit text-xs font-bold text-[#D4AF37] uppercase tracking-widest">UAE B2B Export Specifications</h3>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Transit (Mundra → Jebel Ali):</span>
                <span className="font-bold text-white">5–6 Days</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Available Thickness:</span>
                <span className="font-bold text-white">18mm, 20mm, 30mm</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Certification:</span>
                <span className="font-bold text-[#D4AF37]">ESMA / UAE Muni Compliant</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Loading Port:</span>
                <span className="font-bold text-white">Mundra / Nhava Sheva, India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Export MOQ:</span>
                <span className="font-bold text-white">1 × 20ft FCL (~450 Sqm)</span>
              </div>
            </div>
          </div>
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

      {/* ─── Dark Band: UAE Port Details ─── */}
      <div className="bg-[#1C1C21] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Sea Freight Logistics</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-white mt-3 mb-5">
              Fastest Sea Route: India to UAE Natural Stone
            </h2>
            <p className="font-inter text-sm text-neutral-300 leading-relaxed">
              As a <strong className="text-white">marble supplier India</strong> and <strong className="text-white">granite manufacturer India</strong>, our Mundra and Nhava Sheva loading ports are the closest departure points to UAE. This shortest shipping lane means faster delivery, lower freight costs, and reduced transit insurance for all UAE buyers.
            </p>
            <button onClick={handleEnquire} className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg transition-all">
              Get Freight Quote <Ship className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { port: "Jebel Ali", city: "Dubai", days: "5–6 Days" },
              { port: "Khalifa Port", city: "Abu Dhabi", days: "6–7 Days" },
              { port: "Khorfakkan Port", city: "Sharjah", days: "4–5 Days" },
              { port: "Saqr Port", city: "Ras Al Khaimah", days: "5–6 Days" }
            ].map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#D4AF37]/40 transition-colors">
                <MapPin className="w-4 h-4 text-[#D4AF37] mb-2" />
                <p className="font-outfit text-sm font-bold text-white">{p.port}</p>
                <p className="text-xs text-neutral-400">{p.city}</p>
                <p className="text-xs font-mono text-[#D4AF37] mt-2 font-bold">{p.days}</p>
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
