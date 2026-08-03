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
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-md text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            🇺🇸 Los Angeles · New York · Houston Ports
          </div>

          <h1 className="font-cormorant text-4xl sm:text-6xl font-semibold leading-tight">
            Marble Exporter from India to USA
          </h1>

          <button onClick={handleEnquire} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all">
            Request USA Import Quote <ArrowRight className="w-4 h-4" />
          </button>
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
                    <p className="font-inter text-sm text-[#52525C] leading-relaxed">{item.body}</p>
                  </div>
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
              Marble Exporter India to USA — Granite Exporter India to USA
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-3 mb-5 leading-tight">
              Direct Indian Natural Stone Supply for American Importers & Distributors
            </h2>
            <p className="font-inter text-base text-[#52525C] leading-relaxed mb-4">
              Pyros Surfaces is a premier <strong className="text-[#1C1C21]">marble exporter from India</strong> and leading <strong className="text-[#1C1C21]">granite exporter from India</strong> supplying US stone distributors, kitchen &amp; bath showrooms, and general contractors. As a verified <strong className="text-[#1C1C21]">Indian marble exporter</strong> and <strong className="text-[#1C1C21]">Indian granite supplier</strong>, we export zero-tariff Section 301 natural stone slabs across US East, West, and Gulf Coast ports.
            </p>
            <p className="font-inter text-base text-[#52525C] leading-relaxed">
              Operating as a trusted <strong className="text-[#1C1C21]">natural stone exporter India</strong> and <strong className="text-[#1C1C21]">marble supplier India</strong>, Pyros produces 20mm and 30mm Italian gangsaw slabs. Our factory is an established <strong className="text-[#1C1C21]">granite manufacturer India</strong> providing full US CBP compliance, ISPM-15 phytosanitary wood packaging, and commercial HTS tariff classification.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                cat: "Marble Slabs Exporter",
                title: "White Marble Slabs for US Showrooms",
                body: "As a marble slabs exporter for the US market, Pyros delivers 20mm & 30mm gangsaw Kishangarh White and Makrana marble slabs to tile and stone distributors in California, Texas, Florida, and New York."
              },
              {
                cat: "Granite Slabs Supplier",
                title: "Black & Steel Grey Countertop Slabs",
                body: "Our granite slabs supplier operations supply Absolute Black, Steel Grey, and Titanium Gold gangsaw slabs with mirror polish for US kitchen countertop fabricators and commercial developers."
              },
              {
                cat: "Marble Tiles Exporter",
                title: "Calibrated Marble Tiles — US Trade",
                body: "As a marble tiles exporter to American builders, we supply 12x12, 18x18, and 24x24 inch (30x30 to 60x60cm) calibrated marble floor and wall tiles with ±0.5mm precision for US interior renovation."
              },
              {
                cat: "Granite Tiles Exporter",
                title: "Granite Tiles for US Commercial Flooring",
                body: "Our granite tiles exporter line manufactures flamed, honed, and polished granite tiles for US commercial shopping plazas, office complex lobbies, and outdoor hotel plazas."
              },
              {
                cat: "Marble Exporter India to USA",
                title: "CBP Compliant US White Marble Shipments",
                body: "Pyros is a trusted marble exporter India to USA delivering ocean FCL containers directly to Los Angeles/Long Beach (20–22 days) and New York/Newark (25–28 days) with complete origin docs."
              },
              {
                cat: "Granite Exporter India to USA",
                title: "Zero-Tariff Indian Granite Supply",
                body: "As a granite exporter India to USA, we offer US stone buyers a distinct tariff advantage over Chinese stone imports with full Section 301 exemption and factory-direct pricing."
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
