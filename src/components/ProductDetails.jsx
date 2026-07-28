import React, { useState, useEffect } from 'react';
import { stones } from '../data/stoneData';
import { Container, Scale, Check, ArrowLeft, Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

export default function ProductDetails({ stoneId, onBack }) {
  const currentStone = stones.find(s => s.id === stoneId);

  // Specifications configurator states
  const [thickness, setThickness] = useState(20); // mm
  const [quantity, setQuantity] = useState(120); // slabs
  const [destination, setDestination] = useState('Arab'); // US, UK, Arab
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');

  // Scroll to top on page load or stoneId change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stoneId]);

  if (!currentStone) {
    return (
      <div className="py-32 text-center max-w-7xl mx-auto px-6 bg-[#FAF9F6] text-[#1C1C21]">
        <h2 className="font-cormorant text-3xl mb-4 text-[#1C1C21] font-medium">Stone Variant Not Found</h2>
        <button onClick={onBack} className="text-[#D4AF37] hover:underline uppercase text-xs tracking-wider font-semibold">
          Return to Gallery
        </button>
      </div>
    );
  }

  // Logistic Engine Calculations
  const density = parseFloat(currentStone.density);
  const totalSqm = quantity * 5.4;
  const thicknessInMeters = thickness / 1000;
  const totalVolumeM3 = totalSqm * thicknessInMeters;
  const totalWeightTons = totalVolumeM3 * density;

  const maxWeightPerContainer = destination === 'US' ? 20.5 : destination === 'UK' ? 23.5 : 26.5;
  const containersNeeded = Math.ceil(totalWeightTons / maxWeightPerContainer) || 0;
  const bundleCapacity = thickness >= 20 ? 10 : 13;
  const bundlesNeeded = Math.ceil(quantity / bundleCapacity) || 0;

  let recommendedPort = 'Mundra Port (Gujarat)';
  if (currentStone.origin.toLowerCase().includes('south') || currentStone.category === 'granite') {
    recommendedPort = 'Chennai or Tuticorin Port (Tamil Nadu)';
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!leadName || !leadEmail) return;

    try {
      fetch('https://formsubmit.co/ajax/info@pyrosstones.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Product Price & Spec Inquiry: ${currentStone.name}`,
          _captcha: 'false',
          _template: 'table',
          product_name: currentStone.name,
          stone_id: currentStone.id,
          thickness_mm: thickness,
          quantity_slabs: quantity,
          destination_region: destination,
          total_sqm: totalSqm.toFixed(2),
          total_weight_tons: totalWeightTons.toFixed(2),
          containers_needed: containersNeeded,
          customer_name: leadName,
          customer_email: leadEmail
        })
      });
    } catch (err) {
      console.error('Email dispatch error:', err);
    }

    setIsSubmitted(true);
  };

  // Get other finishes of the same base stone
  const alternativeFinishes = stones.filter(s => s.baseId === currentStone.baseId && s.id !== currentStone.id);
  const selectedFinish = currentStone.finishes[0] || 'Standard';
  const activeImage = currentStone.image;

  // Determine HS Code based on Category
  const hsCode = currentStone.category === 'granite' ? '2516.12' : currentStone.category === 'quartzite' ? '6802.99' : '2515.12';

  const handleOpenQuote = () => {
    const el = document.getElementById('inquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(`Hi Pyros Marble, I am interested in getting a quote for ${currentStone.name} (${currentStone.category}). Please share details.`);

  return (
    <section className="py-24 bg-[#FAF9F6] text-[#1C1C21] min-h-screen font-inter">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Link */}
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-[#4E4E59] hover:text-[#D4AF37] transition-colors mb-8 uppercase text-xs tracking-widest font-semibold"
        >
          <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
          Back to Slabs Gallery
        </button>

        {/* Main Product Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Product Image */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] aspect-[4/3] w-full shadow-lg bg-neutral-100 relative group">
              <img 
                src={activeImage} 
                alt={currentStone.name} 
                className="w-full h-full object-cover object-center scale-[1.25] group-hover:scale-[1.35] transition-all duration-500" 
              />
              <span className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-[10px] tracking-wider uppercase font-bold text-[#D4AF37] border border-white/10 shadow-md">
                Finish: {selectedFinish}
              </span>
            </div>
          </div>

          {/* Right Column: Title, Rich Description, Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] text-[#D4AF37] tracking-[0.25em] uppercase font-bold block mb-2">
                Pyros Surfaces Worldwide · Export Grade
              </span>
              <h1 className="font-cormorant text-4xl sm:text-5xl font-semibold mb-5 text-[#1C1C21] leading-tight">
                {currentStone.name}
              </h1>
              <p className="font-inter text-sm text-[#4E4E59] leading-relaxed mb-6 font-light">
                {currentStone.name} from {currentStone.origin} features a rich natural surface with elegant flow patterns and exceptional density ({currentStone.density}). This premium {currentStone.category} is exported for luxury feature walls, countertops, executive flooring, and bathroom surfaces. Pyros Marble supplies {currentStone.name} in polished, honed, leathered, and brushed finishes in gangsaw slabs and calibrated tile formats.
              </p>

              {/* Action Buttons: Get a Quote & WhatsApp */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleOpenQuote}
                  className="px-6 py-3 bg-[#C82333] hover:bg-[#b01c2b] text-white text-xs tracking-wider uppercase font-bold rounded-lg shadow-md transition-all flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Get a Quote
                </button>

                <a
                  href={`https://wa.me/919672111191?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs tracking-wider uppercase font-bold rounded-lg shadow-md transition-all flex items-center gap-2 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2-COLUMN SPECIFICATIONS & EXPORT CHECKLIST SECTION */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left Column: Product Technical Specs */}
            <div className="space-y-4 text-xs font-inter text-[#4E4E59]">
              <h3 className="font-outfit text-sm font-bold uppercase tracking-wider text-[#1C1C21] border-b border-[#E5E7EB] pb-3">
                Technical Specifications
              </h3>
              
              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Origin:</span>
                <span>{currentStone.origin}</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Colour & Pattern:</span>
                <span className="text-right">Natural stone veining with uniform coloration and high luster rating</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Finish:</span>
                <span>Polished · Honed · Leathered · Brushed</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Thickness:</span>
                <span className="font-mono font-bold text-[#1C1C21]">20 mm · 30 mm</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Formats:</span>
                <span className="font-mono">Slabs (240×120 cm) · Tiles (60×60, 60×30, 30×30 cm)</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Applications:</span>
                <span>Feature Walls · Countertops · Flooring · Bathroom Surfaces</span>
              </div>

              <div className="py-1.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">HS Code:</span>
                <span className="font-mono font-bold text-[#1C1C21]">{hsCode}</span>
              </div>
            </div>

            {/* Right Column: Export Checkpoints with Checkmarks ✓ */}
            <div className="space-y-4 text-xs font-inter text-[#1C1C21]">
              <h3 className="font-outfit text-sm font-bold uppercase tracking-wider text-[#1C1C21] border-b border-[#E5E7EB] pb-3">
                Quality & Export Standards
              </h3>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3">
                  <span className="text-[#1C1C21] font-bold text-sm leading-none">✓</span>
                  <span>Available in polished, honed, leathered, and brushed finishes</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#1C1C21] font-bold text-sm leading-none">✓</span>
                  <span>Gangsaw slabs and calibrated tiles supplied in bulk</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#1C1C21] font-bold text-sm leading-none">✓</span>
                  <span>Secure ISPM-15 wooden crate packaging for safe international freight</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#1C1C21] font-bold text-sm leading-none">✓</span>
                  <span>Full export documentation — commercial invoice, BL, COO, packing list</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#1C1C21] font-bold text-sm leading-none">✓</span>
                  <span>Minimum order: 20 MT (approx. 1 × 20ft container)</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#1C1C21] font-bold text-sm leading-none">✓</span>
                  <span>Shipped from {recommendedPort}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Banner */}
          <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-center text-xs text-[#4E4E59] font-medium">
            Trusted by importers, architects and contractors across 45+ countries. Get a quote within 24 hours.
          </div>
        </div>

        {/* CONTAINER CALCULATOR & INQUIRY FORM */}
        <div id="inquiry-form" className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-sm mb-16">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-[#E5E7EB] pb-4 gap-4">
              <div>
                <span className="text-[10px] text-[#D4AF37] tracking-[0.2em] uppercase font-bold block mb-1">Interactive Export Configurator</span>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#1C1C21]">Direct Container Weight & Load Calculator</h3>
              </div>
              <span className="text-xs text-[#4E4E59] font-mono bg-[#FAF9F6] border border-[#E5E7EB] px-3 py-1.5 rounded-md">
                Departure: {recommendedPort}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">Thickness (mm)</label>
                <select 
                  value={thickness} 
                  onChange={(e) => setThickness(parseInt(e.target.value))}
                  className="bg-[#FAF9F6] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-[#1C1C21] focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value={20}>20 mm (Standard Gangsaw)</option>
                  <option value={30}>30 mm (Heavy Slab)</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">Quantity (Slabs)</label>
                <input 
                  type="number" 
                  min="1"
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                  className="bg-[#FAF9F6] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-[#1C1C21] font-mono focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">Destination Port Limit</label>
                <select 
                  value={destination} 
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-[#FAF9F6] border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-xs text-[#1C1C21] focus:border-[#D4AF37] focus:outline-none"
                >
                  <option value="US">USA & Canada (Max 20.5T Limit)</option>
                  <option value="UK">UK & Europe (Max 23.5T Limit)</option>
                  <option value="Arab">GCC & Middle East (Max 26.5T Limit)</option>
                </select>
              </div>
            </div>

            {/* Estimation Results Panel */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#FAF9F6] border border-[#E5E7EB] text-xs">
              <div>
                <span className="text-[#4E4E59] block text-[9px] uppercase tracking-wider">Net Slab Surface</span>
                <span className="text-[#1C1C21] font-mono font-bold text-sm mt-1 block">{totalSqm.toFixed(1)} sqm</span>
              </div>
              <div>
                <span className="text-[#4E4E59] block text-[9px] uppercase tracking-wider">Est. Cargo Weight</span>
                <span className="text-[#1C1C21] font-mono font-bold text-sm mt-1 block">{totalWeightTons.toFixed(2)} Tons</span>
              </div>
              <div>
                <span className="text-[#4E4E59] block text-[9px] uppercase tracking-wider">20ft FCL Containers</span>
                <span className="text-[#D4AF37] font-bold text-sm mt-1 block">{containersNeeded} Container(s)</span>
              </div>
              <div>
                <span className="text-[#4E4E59] block text-[9px] uppercase tracking-wider">ISPM-15 Crates</span>
                <span className="text-[#1C1C21] font-mono font-bold text-sm mt-1 block">{bundlesNeeded} Bundles</span>
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div className="border-t border-[#E5E7EB] pt-6 space-y-4">
              <h4 className="font-outfit text-sm tracking-wider uppercase text-[#1C1C21] font-bold">
                Submit Direct Export Inquiry for {currentStone.name}
              </h4>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Contact Name *" 
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-[#E2E8F0] rounded-lg px-4 py-3 text-xs text-[#1C1C21] placeholder-[#8E8E93]/60 focus:border-[#D4AF37] focus:outline-none"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address *" 
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-[#FAF9F6] border border-[#E2E8F0] rounded-lg px-4 py-3 text-xs text-[#1C1C21] placeholder-[#8E8E93]/60 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-widest uppercase font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Submit Formal RFQ / Price Request
                  </button>
                </form>
              ) : (
                <div className="p-5 rounded-xl bg-[#FAF9F6] border border-[#E5E7EB] text-[#1C1C21] flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#D4AF37]" />
                  <div>
                    <span className="font-bold text-xs block">Export Inquiry Dispatched!</span>
                    <p className="text-xs text-[#4E4E59] mt-1 font-light">
                      Thank you {leadName}. Our export department will respond with formal FOB/CIF pricing within 24 hours.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Alternative Finishes Section */}
        {alternativeFinishes.length > 0 && (
          <div className="mt-20 pt-16 border-t border-[#E5E7EB]">
            <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-3 block">
              More Textures
            </span>
            <h2 className="font-cormorant text-3xl font-medium tracking-wide text-[#1C1C21] mb-10">
              Alternative Finishes for {currentStone.name.split(' (')[0]}
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {alternativeFinishes.map((variant) => {
                const finishName = variant.finishes[0] || 'Standard';
                return (
                  <div
                    key={variant.id}
                    onClick={() => {
                      window.location.hash = `#/product/${variant.id}`;
                    }}
                    className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-[#E5E7EB] hover:border-[#D4AF37]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 relative">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-full object-cover object-center scale-[1.25] group-hover:scale-[1.35] transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                      <span className="font-outfit text-sm font-bold text-[#1C1C21] group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                        {finishName}
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-[#8E8E93] mt-1">
                        {variant.category}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
