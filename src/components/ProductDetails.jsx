import React, { useState, useEffect } from 'react';
import { stones } from '../data/stoneData';
import { Container, Scale, Check, ArrowLeft, Send } from 'lucide-react';

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

  return (
    <section className="py-24 bg-[#FAF9F6] text-[#1C1C21] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Back Link */}
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 text-[#4E4E59] hover:text-[#D4AF37] transition-colors mb-12 uppercase text-xs tracking-widest font-semibold"
        >
          <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
          Back to Slabs Gallery
        </button>

        {/* Main Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Image and specifications tables (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Main Image */}
            <div className="rounded-xl overflow-hidden border border-[#E5E7EB] aspect-[4/3] w-full shadow-md bg-white relative group">
              <img src={activeImage} alt={`${currentStone.name}`} className="w-full h-full object-cover transition-all duration-500" />
              {selectedFinish && (
                <span className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded text-[10px] tracking-wider uppercase font-bold text-[#D4AF37] border border-white/10">
                  Finish: {selectedFinish}
                </span>
              )}
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
              <h3 className="font-outfit text-sm tracking-wider uppercase text-[#1C1C21] mb-4 border-b border-black/5 pb-3">Technical Analysis</h3>
              
              <div className="space-y-4 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-[#E5E7EB] text-[#4E4E59]">
                  <span>Exporter Origin:</span>
                  <span className="text-[#1C1C21] font-semibold">{currentStone.origin}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#E5E7EB] text-[#4E4E59]">
                  <span>Dry Density:</span>
                  <span className="text-[#1C1C21] font-mono font-medium">{currentStone.density}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#E5E7EB] text-[#4E4E59]">
                  <span>Water Absorption:</span>
                  <span className="text-[#1C1C21] font-mono font-medium">{currentStone.waterAbsorption}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#E5E7EB] text-[#4E4E59]">
                  <span>Surface Finish:</span>
                  <span className="text-[#1C1C21] font-bold text-[#D4AF37] uppercase text-[10px] tracking-wider bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-2.5 py-0.5 rounded">
                    {selectedFinish}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 text-[#4E4E59]">
                  <span>Calibrated Sizes:</span>
                  <span className="text-[#1C1C21] font-mono text-right max-w-xs">{currentStone.sizes.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Configurator calculations (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[10px] text-[#D4AF37] tracking-[0.25em] uppercase font-bold block mb-1">{currentStone.category} Specification</span>
              <h1 className="font-cormorant text-4xl sm:text-5xl font-semibold mb-6 text-[#1C1C21]">{currentStone.name}</h1>
              <p className="font-inter text-sm text-[#4E4E59] leading-relaxed mb-8 font-light">
                {currentStone.description}
              </p>

              {/* Quick Container Estimator inside Product Page */}
              <div className="border-t border-black/5 pt-6 space-y-6">
                <h3 className="font-outfit text-xs tracking-wider uppercase text-[#1C1C21] flex items-center gap-2 font-semibold">
                  <Container className="w-4 h-4 text-[#D4AF37]" />
                  Direct Container Weight Calculator
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label className="text-[9px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">Thickness (mm)</label>
                    <select 
                      value={thickness} 
                      onChange={(e) => setThickness(parseInt(e.target.value))}
                      className="bg-white border border-[#E2E8F0] rounded px-3 py-2 text-xs text-[#1C1C21] focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value={20} className="bg-white text-[#1C1C21]">20 mm (Std)</option>
                      <option value={30} className="bg-white text-[#1C1C21]">30 mm</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">Quantity (Slabs)</label>
                    <input 
                      type="number" 
                      min="1"
                      value={quantity} 
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                      className="bg-white border border-[#E2E8F0] rounded px-3 py-2 text-xs text-[#1C1C21] font-mono focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[9px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">Destination Rules</label>
                    <select 
                      value={destination} 
                      onChange={(e) => setDestination(e.target.value)}
                      className="bg-white border border-[#E2E8F0] rounded px-3 py-2 text-xs text-[#1C1C21] focus:border-[#D4AF37] focus:outline-none"
                    >
                      <option value="US" className="bg-white text-[#1C1C21]">USA (Max 20.5T)</option>
                      <option value="UK" className="bg-white text-[#1C1C21]">UK (Max 23.5T)</option>
                      <option value="Arab" className="bg-white text-[#1C1C21]">Arab Nations (Max 26.5T)</option>
                    </select>
                  </div>
                </div>

                {/* Estimation Results Panel */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded bg-[#FAF9F6] border border-[#E5E7EB] text-xs">
                  <div>
                    <span className="text-[#4E4E59] block text-[9px] uppercase">Net Area</span>
                    <span className="text-[#1C1C21] font-mono font-bold mt-1 block">{totalSqm.toFixed(1)} sqm</span>
                  </div>
                  <div>
                    <span className="text-[#4E4E59] block text-[9px] uppercase">Est. Weight</span>
                    <span className="text-[#1C1C21] font-mono font-bold mt-1 block">{totalWeightTons.toFixed(2)} Tons</span>
                  </div>
                  <div>
                    <span className="text-[#4E4E59] block text-[9px] uppercase">20ft Containers</span>
                    <span className="text-[#D4AF37] font-bold mt-1 block">{containersNeeded} Container(s)</span>
                  </div>
                  <div>
                    <span className="text-[#4E4E59] block text-[9px] uppercase">Wood Crates</span>
                    <span className="text-[#1C1C21] font-mono font-bold mt-1 block">{bundlesNeeded} Bundles</span>
                  </div>
                </div>

                <div className="text-[10px] text-[#4E4E59] flex justify-between">
                  <span>Routing: Departure from {recommendedPort}</span>
                  <span>Safety Margin: 3% Calibrated</span>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Form */}
            <div className="border-t border-black/5 pt-6 mt-8 space-y-4">
              <h4 className="font-outfit text-xs tracking-wider uppercase text-[#1C1C21] font-semibold">Direct Export Inquiry for {currentStone.name}</h4>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Contact Name *" 
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full bg-white border border-[#E2E8F0] rounded px-4 py-2.5 text-xs text-[#1C1C21] placeholder-[#8E8E93]/50 focus:border-[#D4AF37] focus:outline-none"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address *" 
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full bg-white border border-[#E2E8F0] rounded px-4 py-2.5 text-xs text-[#1C1C21] placeholder-[#8E8E93]/50 focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-3 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-widest uppercase font-bold rounded flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Quote Request
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded bg-[#FAF9F6] border border-[#E5E7EB] text-[#1C1C21] flex items-start gap-3">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                  <div className="flex flex-col text-xs">
                    <span className="font-semibold text-[#D4AF37]">Inquiry Logged for {currentStone.name}</span>
                    <span className="mt-1 text-[#4E4E59]">We will send a custom pricing sheet containing FOB and CIF rates for the <strong>{selectedFinish}</strong> finish to {leadEmail} shortly.</span>
                    <button 
                      type="button" 
                      onClick={() => { setIsSubmitted(false); setLeadName(''); setLeadEmail(''); }}
                      className="text-[#D4AF37] text-left hover:text-[#b59228] underline font-bold mt-2 uppercase tracking-wider text-[9px] transition-colors"
                    >
                      New Request
                    </button>
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
                    <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
