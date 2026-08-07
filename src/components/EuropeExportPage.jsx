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
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-md text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase">
            🇪🇺 Antwerp · Hamburg · Rotterdam · Genoa
          </div>

          <h1 className="font-cormorant text-4xl sm:text-6xl font-semibold leading-tight">
            Marble Exporter from India to Europe
          </h1>

          <button onClick={handleEnquire} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#B58D1E] text-black font-outfit text-sm font-bold uppercase tracking-wider rounded-lg shadow-xl transition-all">
            Request Europe Export Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>


      {/* ─── European Stone Applications Section ─── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">
            European Architectural Applications
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-2">
            Where Indian Stone is Specified in Europe
          </h2>
          <p className="font-inter text-base text-[#52525C] mt-4 max-w-3xl mx-auto leading-relaxed">
            As a leading <strong className="text-[#1C1C21]">marble exporter from India</strong> and <strong className="text-[#1C1C21]">granite slabs supplier</strong>, Pyros Surfaces supplies European architects, interior designers, and stone fabricators across key sector applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Luxury Hospitality & Hotels",
              city: "Paris · Milan · Amsterdam",
              desc: "Gangsaw white marble slabs and bookmatched feature wall panels specified for luxury hotel lobbies, reception desks, and spa wellness suites."
            },
            {
              title: "Commercial Facades",
              city: "Frankfurt · Hamburg · Brussels",
              desc: "High-performance South Indian granite gangsaw slabs processed for exterior rain-screen wall cladding and commercial office towers."
            },
            {
              title: "High-End Residential Interiors",
              city: "Munich · Madrid · Antwerp",
              desc: "Calibrated 20mm & 30mm marble tiles and polished kitchen countertop slabs for luxury residential villas and urban apartments."
            },
            {
              title: "Public Infrastructure & Plazas",
              city: "Berlin · Rotterdam · Barcelona",
              desc: "Heavy-duty flamed and honed granite floor tiles for high-footfall European public plazas, railway terminals, and civic monuments."
            }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-[#E5E0D5] rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1 font-bold">{item.city}</span>
              <h3 className="font-outfit text-lg font-bold text-[#1C1C21] mb-2 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>
              <p className="font-inter text-sm text-[#52525C] leading-relaxed">{item.desc}</p>
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
                <p className="text-sm text-neutral-300 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Keyword-Rich Content Section ─── */}
      <div className="bg-white border-t border-[#E2D9CC] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Intro Block */}
          <div className="max-w-4xl mx-auto text-center mb-14">
            <span className="font-mono text-xs text-[#D4AF37] font-bold uppercase tracking-widest">
              Marble Exporter India to Europe — Granite Exporter India to Europe
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-semibold text-[#1C1C21] mt-3 mb-5 leading-tight">
              Premium Natural Stone Exports for European Importers & Architects
            </h2>
            <p className="font-inter text-base text-[#52525C] leading-relaxed mb-4">
              Pyros Surfaces is a trusted <strong className="text-[#1C1C21]">marble exporter from India</strong> and premier <strong className="text-[#1C1C21]">granite exporter from India</strong> supplying stone importers in Germany, Netherlands, Belgium, France, Italy, and Spain. As a verified <strong className="text-[#1C1C21]">Indian marble exporter</strong> and <strong className="text-[#1C1C21]">Indian granite supplier</strong>, we export EUR.1 certified GSP natural stone slabs directly to major EU ports.
            </p>
            <p className="font-inter text-base text-[#52525C] leading-relaxed">
              Functioning as a certified <strong className="text-[#1C1C21]">natural stone exporter India</strong> and <strong className="text-[#1C1C21]">marble supplier India</strong>, Pyros operates Italian gangsaw lines producing 20mm and 30mm slabs. Our factory is a recognized <strong className="text-[#1C1C21]">granite manufacturer India</strong> providing full REACH compliance documentation and ISPM-15 fumigated wooden packaging.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                cat: "Marble Slabs Exporter",
                title: "White Marble Slabs for EU Luxury Interiors",
                body: "As a dedicated marble slabs exporter to Europe, Pyros supplies 20mm & 30mm Italian-gangsaw Indian white marble slabs for Parisian luxury apartments and German boutique hotel lobbies."
              },
              {
                cat: "Granite Slabs Supplier",
                title: "Black & Grey Granite Gangsaw Slabs",
                body: "Our granite slabs supplier operations export Absolute Black, Steel Grey, and Viscon White gangsaw slabs with 95+ gloss polish for Dutch and Belgian architectural stone processors."
              },
              {
                cat: "Marble Tiles Exporter",
                title: "Calibrated Marble Tiles for EU Renovations",
                body: "As a marble tiles exporter to European contractors, we manufacture 60x60cm and 80x80cm polished and honed marble tiles with ±0.5mm precision for Italian and Spanish villa renovations."
              },
              {
                cat: "Granite Tiles Exporter",
                title: "Granite Tiles for European Plazas",
                body: "Our granite tiles exporter line produces flamed, honed, and polished granite tiles for German public plazas, Antwerp urban promenades, and French outdoor patio developments."
              },
              {
                cat: "Marble Exporter India to Europe",
                title: "GSP Duty-Benefited White Marble Supply",
                body: "Pyros is a certified marble exporter India to Europe delivering direct ocean containers to Antwerp (18–22 days), Rotterdam, and Hamburg with EUR.1 certificates of origin for EU GSP tariff benefits."
              },
              {
                cat: "Granite Exporter India to Europe",
                title: "REACH Compliant Indian Granite Exports",
                body: "As a granite exporter India to Europe, we supply stone importers across Northern and Southern Europe with REACH-compliant documentation and ISPM-15 certified A-frame container lashing."
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
