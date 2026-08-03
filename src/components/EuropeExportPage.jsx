import React, { useState } from 'react';
import { CheckCircle2, Ship, MapPin, ChevronDown, ArrowRight, Anchor, ShieldCheck, FileCheck } from 'lucide-react';

export default function EuropeExportPage({ onNavigate }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const handleEnquire = () => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal('Europe Export Inquiry');
    } else if (onNavigate) {
      onNavigate('contact');
    }
  };

  const faqs = [
    {
      q: "What EU regulations apply to importing marble and granite from India?",
      a: "Indian natural stone does not face EU trade defense measures. As an Indian marble exporter and granite exporter from India, we provide REACH-compliant documentation, phytosanitary certificates (ISPM-15) for wooden crating, and EUR.1 origin declarations where applicable under the India-EU GSP regime."
    },
    {
      q: "Which European ports do you ship marble to?",
      a: "We ship directly to Antwerp (Belgium) — 18–22 days from Nhava Sheva — Hamburg (Germany), Rotterdam (Netherlands), Genoa (Italy), and Barcelona (Spain). Nhava Sheva and Mundra are our primary loading ports for Europe-bound containers."
    },
    {
      q: "Can you supply stone for luxury EU renovation projects?",
      a: "Yes. As a marble slabs exporter and granite slabs supplier, we supply premium 30mm+ gangsaw slabs with 95+ gloss polish for use in luxury apartments in Paris, Munich, and Milan, as well as for historic EU building renovation where authentic natural stone is specified."
    },
    {
      q: "Do you handle EU customs and CE marking for natural stone?",
      a: "Natural stone is generally exempt from CE marking requirements. However, we prepare full compliance documentation as a natural stone exporter India including Declaration of Performance (DoP) for stone used in structural applications, on request."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#1C1C21] min-h-screen">

      {/* ─── BANNER ─── */}
      <div className="bg-[#1C1C21] text-white pt-28 pb-16 px-6 border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

          <div className="space-y-4 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-md text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
              🇪🇺 Antwerp · Hamburg · Rotterdam · Genoa
            </div>

            <h1 className="font-cormorant text-4xl sm:text-6xl font-semibold leading-tight">
              Marble Exporter from India to Europe
            </h1>
            <p className="font-outfit text-xl sm:text-2xl text-[#D4AF37] font-semibold leading-snug">
              Granite Exporter from India to European Union
            </p>

            <p className="font-inter text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              Pyros Surfaces is India's trusted <strong className="text-white">natural stone exporter India</strong> for EU markets — supplying stone importers in Germany, Netherlands, Belgium, France, Italy, and Spain with quarry-direct Indian marble slabs, granite slabs, and calibrated stone tiles under the EU-India GSP trade framework.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <span className="text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> EU GSP Origin Compliant
              </span>
              <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> REACH Documentation
              </span>
              <span className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" /> ISPM-15 Crated Bundles
              </span>
            </div>

            <button onClick={handleEnquire} className="mt-2 inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all">
              Request Europe Export Quote <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="w-full lg:w-96 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-4 text-left">
            <h3 className="font-outfit text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Europe B2B Export Specifications</h3>
            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Transit (Nhava Sheva → AMS):</span>
                <span className="font-bold text-white">18–22 Days</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Slab Thickness:</span>
                <span className="font-bold text-white">20mm, 30mm Gangsaw</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Trade Regime:</span>
                <span className="font-bold text-[#D4AF37]">EU-India GSP (Zero / Low Duty)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-neutral-400">Compliance:</span>
                <span className="font-bold text-white">REACH / DoP on Request</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Export MOQ:</span>
                <span className="font-bold text-white">1 × 20ft FCL (~450 Sqm)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── EU Country Supply Grid ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Country-by-Country Stone Supply</span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-2">
            Serving Key European Stone Markets
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { flag: "🇩🇪", country: "Germany", city: "Hamburg, Frankfurt", supply: "30mm gangsaw marble slabs for luxury residential interiors and commercial office towers. Preferred as Indian granite supplier in German bathroom tile market." },
            { flag: "🇳🇱", country: "Netherlands", city: "Rotterdam, Amsterdam", supply: "White marble slabs and Absolute Black granite for Dutch luxury apartment and hotel renovation. Rotterdam is our primary FCL discharge port." },
            { flag: "🇧🇪", country: "Belgium", city: "Antwerp, Brussels", supply: "60x60 and 80x80cm calibrated granite tiles for Belgian public infrastructure and interior designer specifications. Antwerp Port — India's gateway to EU." },
            { flag: "🇫🇷", country: "France", city: "Paris, Lyon", supply: "Premium Makrana white marble slabs for Parisian luxury interior renovation, grand hotel lobbies, and French architect-specified flooring." },
            { flag: "🇮🇹", country: "Italy", city: "Genoa, Milan", supply: "Gangsaw slabs and bookmatched panels to Italian importers and stone fabricators. Genoa Port discharge for Northern Italy stone processing hubs." },
            { flag: "🇪🇸", country: "Spain", city: "Barcelona, Madrid", supply: "Granite tiles exporter for Spanish coastal hospitality and residential villa projects. Barcelona Port for Iberian Peninsula distribution." }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#E5E0D5] rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{item.flag}</span>
                <div>
                  <h3 className="font-outfit text-lg font-bold text-[#1C1C21] group-hover:text-[#D4AF37] transition-colors">{item.country}</h3>
                  <p className="text-xs text-neutral-400 font-mono">{item.city}</p>
                </div>
              </div>
              <p className="font-inter text-sm text-[#52525C] leading-relaxed">{item.supply}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Dark Band: EU Compliance + GSP ─── */}
      <div className="bg-[#1C1C21] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">EU Trade Compliance</span>
            <h2 className="font-cormorant text-3xl font-semibold text-white mt-3 mb-4">
              GSP & REACH Compliance for EU Buyers
            </h2>
            <p className="font-inter text-sm text-neutral-300 leading-relaxed">
              As a verified <strong className="text-white">marble supplier India</strong> and <strong className="text-white">Indian granite supplier</strong>, all our EU shipments include full REACH compliance documentation, EUR.1 movement certificates, and phytosanitary certificates under ISPM-15.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: FileCheck, title: "EUR.1 Certificate", body: "Proof of Indian origin for EU GSP duty benefit — reduces import duty on marble and granite significantly." },
              { icon: ShieldCheck, title: "REACH Compliant", body: "Natural stone documentation confirming no restricted substances — required by many EU contractors and architects." },
              { icon: Anchor, title: "ISPM-15 Crating", body: "All wooden packaging (A-frames, crates) is fumigated and ISPM-15 stamped to comply with EU phytosanitary rules." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-colors">
                <item.icon className="w-6 h-6 text-[#D4AF37] mb-3" />
                <h4 className="font-outfit text-sm font-bold text-white mb-2">{item.title}</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FAQ ─── */}
      <div className="bg-[#F5F2EC] py-20 px-6 border-t border-[#E2D9CC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">European Import FAQ</span>
            <h2 className="font-cormorant text-3xl sm:text-4xl font-semibold text-[#1C1C21] mt-2">
              Frequently Asked Questions — Europe Export
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
          {["marble exporter from India","granite exporter from India","Indian marble exporter","Indian granite supplier","natural stone exporter India","marble supplier India","granite manufacturer India","marble slabs exporter","granite slabs supplier","marble tiles exporter","granite tiles exporter","Marble exporter India to Europe","Granite exporter India to Europe","Marble exporter India to Germany"].map((tag, i) => (
            <span key={i} className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2D9CC] text-xs font-medium text-[#4E4E59] hover:border-[#D4AF37] transition-colors">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
