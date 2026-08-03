import React, { useState } from 'react';
import { CheckCircle2, Ship, MapPin, ChevronDown, ArrowRight, Building2, Globe2, FileText } from 'lucide-react';

export default function USAExportPage({ onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleEnquire = () => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal('USA Export Inquiry');
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };

  const faqs = [
    {
      q: "What are the US import duties on marble and granite from India?",
      a: "Under the current US Harmonized Tariff Schedule (HTS), Indian marble slabs (HTS 2515.12) and granite slabs (HTS 2516.12) benefit from low to zero tariff rates compared to Chinese stone. We provide full HS code documentation to streamline US Customs and Border Protection (CBP) clearance."
    },
    {
      q: "Which US West Coast and East Coast ports do you ship to?",
      a: "We ship to Los Angeles / Long Beach Port (20–22 days from Mundra), New York / Newark Port (25–28 days), Houston Port (22–25 days), and Seattle Port (18–20 days) via Mundra and Nhava Sheva loading ports."
    },
    {
      q: "Do you provide FDA/CBP compliant export documentation?",
      a: "Yes. As an Indian marble exporter and granite manufacturer India, we provide full US CBP-compliant documentation: Commercial Invoice, Packing List, Certificate of Origin, Bill of Lading, Phytosanitary Certificate (ISPM-15 crates), and Product Test Reports."
    },
    {
      q: "What is the minimum order for USA marble slab imports?",
      a: "MOQ is 1 × 20ft FCL (~450 Sqm of 20mm gangsaw slabs or ~350 Sqm of 30mm slabs). USA buyers ordering 2+ containers receive priority production scheduling and preferential pricing as a granite slabs supplier for bulk importers."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1C1C21] min-h-screen">

      {/* ─── BANNER ─── */}
      <div className="bg-[#1C1C21] text-white pt-28 pb-16 px-6 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-md text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
              🇺🇸 Los Angeles · New York · Houston Ports
            </div>

            <h1 className="font-cormorant text-4xl sm:text-6xl font-semibold leading-tight">
              Marble Exporter from India to USA
            </h1>
            <p className="font-outfit text-xl sm:text-2xl text-[#D4AF37] font-semibold leading-snug">
              Granite Exporter from India to United States
            </p>

            <p className="font-inter text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Pyros Surfaces is a certified <strong className="text-white">Indian marble exporter</strong> and <strong className="text-white">natural stone exporter India</strong> for the US market — supplying American stone importers, kitchen and bath distributors, tile showrooms, and general contractors with quarry-direct pricing on Rajasthan marble and South Indian granite.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <span className="text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> CBP-Compliant Documentation
              </span>
              <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> 4 US Coast Ports Served
              </span>
              <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> No China Tariff Risk
              </span>
            </div>

            <button onClick={handleEnquire} className="mt-2 inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all">
              Request USA Import Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="w-full lg:w-96 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-4 text-left">
            <h3 className="font-outfit text-xs font-bold text-[#D4AF37] uppercase tracking-widest">USA B2B Import Specifications</h3>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Transit (Mundra → LA/LB):</span>
                <span className="font-bold text-white">20–22 Days</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">HTS Code (Marble Slabs):</span>
                <span className="font-bold text-white">2515.12 / 6802.91</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Tariff Advantage:</span>
                <span className="font-bold text-[#D4AF37]">Zero Section 301 Risk</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Loading Port:</span>
                <span className="font-bold text-white">Mundra / Nhava Sheva</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Export MOQ:</span>
                <span className="font-bold text-white">1 × 20ft FCL (~450 Sqm)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Why India Stone for USA ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">India vs China Stone: USA Import Advantage</span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-2">
            Why US Importers Are Switching to Indian Stone
          </h2>
          <p className="font-inter text-base text-[#52525C] mt-4 max-w-3xl mx-auto leading-relaxed">
            As US Section 301 tariffs on Chinese stone remain in effect, American buyers are sourcing from India — the world's #2 natural stone exporter. Indian marble and granite carry <strong className="text-[#1C1C21]">zero Section 301 risk</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#1C1C21] text-white rounded-2xl p-8 space-y-5">
            <h3 className="font-outfit text-sm font-bold text-[#D4AF37] uppercase tracking-widest">Pyros India Stone Advantage for USA</h3>
            <div className="space-y-4 text-sm">
              {[
                { label: "Section 301 Tariff", value: "0% — India not listed" },
                { label: "US HTS Marble Slab Rate", value: "0–3.7% Basic Duty" },
                { label: "Quarry-Direct Price Advantage", value: "30–45% Below Retail" },
                { label: "Granite Tiles Exporter Capacity", value: "5,000 Sqm / Month" },
                { label: "US CBP Docs Provided", value: "Invoice, BL, CoO, Phyto" }
              ].map((row, i) => (
                <div key={i} className="flex justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                  <span className="text-neutral-400">{row.label}</span>
                  <span className="font-semibold text-white text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-outfit text-sm font-bold text-[#D4AF37] uppercase tracking-widest">Who We Supply in the USA</h3>
            <div className="space-y-4">
              {[
                { icon: Building2, title: "Tile & Stone Importers", body: "Granite slabs supplier and marble slabs exporter for US distributors stocking kitchens countertops, bathroom vanities, and hotel room flooring." },
                { icon: Globe2, title: "Kitchen & Bath Showrooms", body: "Wholesale supply of Italian-gangsaw-cut Indian marble slabs and granite tiles to K&B showrooms in California, Texas, Florida, and New York." },
                { icon: FileText, title: "General Contractors & Fabricators", body: "Large-lot marble tiles exporter and granite tiles exporter supply for GC fabrication shops producing countertop blanks and custom floor tiles." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-white border border-[#E5E0D5] rounded-xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group">
                  <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 transition-colors">
                    <item.icon className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="font-outfit text-sm font-bold text-[#1C1C21] mb-1">{item.title}</h4>
                    <p className="font-inter text-xs text-[#52525C] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── USA Port Table ─── */}
      <div className="bg-[#1C1C21] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Direct Ocean Freight</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-white mt-2">USA Destination Ports & Transit Times</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { port: "Los Angeles / Long Beach", region: "West Coast", transit: "20–22 Days" },
              { port: "New York / Newark", region: "East Coast", transit: "25–28 Days" },
              { port: "Houston", region: "Gulf Coast", transit: "22–25 Days" },
              { port: "Seattle", region: "Pacific Northwest", transit: "18–20 Days" }
            ].map((p, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-colors">
                <MapPin className="w-4 h-4 text-[#D4AF37] mb-3" />
                <p className="font-outfit text-sm font-bold text-white leading-snug">{p.port}</p>
                <p className="text-xs text-neutral-400 mt-1">{p.region}</p>
                <p className="text-xs font-mono text-[#D4AF37] mt-3 font-bold">{p.transit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div className="bg-[#F5F2EC] py-20 px-6 border-t border-[#E2D9CC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">USA Import FAQ</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#1C1C21] mt-2">
              Frequently Asked Questions — USA Export
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
          {["marble exporter from India","granite exporter from India","Indian marble exporter","Indian granite supplier","natural stone exporter India","marble supplier India","granite manufacturer India","marble slabs exporter","granite slabs supplier","marble tiles exporter","granite tiles exporter","Marble exporter India to USA","Granite exporter India to USA"].map((tag, i) => (
            <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2D9CC] text-xs font-medium text-[#4E4E59] hover:border-[#D4AF37] transition-colors">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
