import React, { useState, useEffect } from 'react';
import { stones } from '../data/stoneData';
import { Scale, Container, Check, Send, AlertTriangle } from 'lucide-react';

export default function QuoteCalculator({ selectedStoneFromCatalog, clearSelectedStone }) {
  const [selectedStoneId, setSelectedStoneId] = useState('');
  const [thickness, setThickness] = useState(20); // mm
  const [quantityType, setQuantityType] = useState('slabs'); // slabs or sqm
  const [quantity, setQuantity] = useState(120); 
  const [destination, setDestination] = useState('Arab'); // US, UK, Arab
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Quote form lead data
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');

  // Handle selected stone changes from parent prop
  useEffect(() => {
    if (selectedStoneFromCatalog) {
      setSelectedStoneId(selectedStoneFromCatalog.id);
    } else if (stones.length > 0) {
      setSelectedStoneId(stones[0].id);
    }
  }, [selectedStoneFromCatalog]);

  const currentStone = stones.find(s => s.id === selectedStoneId) || stones[0];

  // Logic Calculations: 1 Standard Gangsaw Slab = 500 kg (0.50 Tons for 20mm, 0.75 Tons for 30mm)
  const weightPerSlabTons = thickness === 30 ? 0.75 : 0.50;
  
  let totalSqm = 0;
  let totalWeightTons = 0;
  if (quantityType === 'slabs') {
    // Standard slab size is 3.0m x 1.8m = 5.4 sqm
    totalSqm = quantity * 5.4;
    totalWeightTons = quantity * weightPerSlabTons;
  } else {
    totalSqm = quantity;
    totalWeightTons = (totalSqm / 5.4) * weightPerSlabTons;
  }

  const maxWeightPerContainer = 27.0; // Max 27T Limit across all ports
  const containersNeeded = Math.ceil(totalWeightTons / maxWeightPerContainer) || 0;

  // Max 7 to 8 wooden A-frame bundles per 20ft heavy container (~55-60 sqm per bundle)
  const bundlesNeeded = Math.ceil(totalSqm / 55) || 0;

  let recommendedPort = 'Mundra Port (Gujarat)';
  if (currentStone && (currentStone.origin.toLowerCase().includes('south') || currentStone.category === 'granite')) {
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
          _subject: `Freight & Ocean Cargo Quote Request from ${leadName}`,
          _captcha: 'false',
          _template: 'table',
          stone_type: currentStone ? currentStone.name : 'Custom Selection',
          thickness_mm: thickness,
          quantity_slabs: quantity,
          destination_port: destination,
          dispatch_hub: recommendedPort,
          customer_name: leadName,
          customer_email: leadEmail,
          customer_phone: leadPhone || 'N/A'
        })
      });
    } catch (err) {
      console.error('Email dispatch error:', err);
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setLeadName('');
    setLeadEmail('');
    setLeadPhone('');
    if (clearSelectedStone) clearSelectedStone();
  };

  return (
    <section id="calculator" className="py-24 bg-[#FAF9F6] text-[#1C1C21]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-mono mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Interactive Freight Configurator</span>
          </div>
          
          <h2 className="font-cormorant text-4xl sm:text-5xl font-light text-[#1C1C21] tracking-tight">
            Direct Container Weight & Load Calculator
          </h2>
          <div className="w-12 h-0.5 bg-[#D4AF37] my-4" />
          <p className="font-inter text-sm sm:text-base text-[#4E4E59] max-w-2xl font-light">
            Plan your export shipment directly from India's leading natural stone manufacturer. Calculate net tonnage, 20ft container count, and ISPM-15 wooden bundle packing instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CONFIGURATOR CONTROLS */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
              <h3 className="font-outfit text-sm tracking-wider uppercase text-[#1C1C21] font-bold">1. Configure Material & Cargo Specs</h3>
              <span className="text-[10px] text-[#D4AF37] font-mono font-semibold">EXPORT SPEC ENGINE</span>
            </div>

            <div className="space-y-5">
              
              {/* Stone Selection */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">Select Stone Variety</label>
                <select
                  value={selectedStoneId}
                  onChange={(e) => setSelectedStoneId(e.target.value)}
                  className="w-full bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-xs text-[#1C1C21] font-medium focus:border-[#D4AF37] focus:outline-none"
                >
                  {stones.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.category.toUpperCase()}) - Density: {s.density}
                    </option>
                  ))}
                </select>
              </div>

              {/* Thickness Selector */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">Slab / Tile Thickness</label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: 20, label: '20 mm (Standard Gangsaw Slab)' },
                    { val: 30, label: '30 mm (Heavy Duty Countertop Slab)' }
                  ].map((t) => (
                    <button
                      key={t.val}
                      type="button"
                      onClick={() => setThickness(t.val)}
                      className={`py-3 px-4 rounded-lg border text-xs font-mono transition-all text-center ${
                        thickness === t.val 
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#1C1C21] font-bold' 
                          : 'border-[#E5E7EB] bg-white text-[#4E4E59] hover:border-[#D4AF37]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">Unit Type</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => { setQuantityType('slabs'); setQuantity(120); }}
                      className={`py-2.5 rounded-md border text-xs font-mono ${
                        quantityType === 'slabs' 
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#1C1C21] font-bold' 
                          : 'border-[#E5E7EB] bg-white text-[#4E4E59]'
                      }`}
                    >
                      Slabs (~5.4 sqm)
                    </button>
                    <button
                      type="button"
                      onClick={() => { setQuantityType('sqm'); setQuantity(650); }}
                      className={`py-2.5 rounded-md border text-xs font-mono ${
                        quantityType === 'sqm' 
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#1C1C21] font-bold' 
                          : 'border-[#E5E7EB] bg-white text-[#4E4E59]'
                      }`}
                    >
                      Sq. Meters
                    </button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-1.5 font-semibold">
                    Quantity ({quantityType === 'slabs' ? 'Number of Slabs' : 'Total Sq. Metres'})
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                    className="w-full bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-xs text-[#1C1C21] font-mono focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              {/* Destination country */}
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-semibold">Export Destination Regulations</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { code: 'US', label: 'USA & Canada (Max 27 Tons)', info: 'Max 27T per 20ft container' },
                    { code: 'UK', label: 'UK & Europe (Max 27 Tons)', info: 'Max 27T per 20ft container' },
                    { code: 'Arab', label: 'GCC & Middle East (Max 27 Tons)', info: 'Max 27T per 20ft container' }
                  ].map((m) => (
                    <button
                      key={m.code}
                      type="button"
                      onClick={() => setDestination(m.code)}
                      className={`p-3 border rounded-lg text-left transition-all ${
                        destination === m.code
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#1C1C21] font-semibold'
                          : 'border-[#E5E7EB] bg-white text-[#4E4E59] hover:text-[#1C1C21] hover:border-[#D4AF37]'
                      }`}
                    >
                      <div className="font-outfit text-xs font-bold">{m.label}</div>
                      <div className="text-[9px] mt-1 font-light opacity-80">{m.info}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Lead Request Details */}
              <div className="border-t border-black/5 pt-6 mt-8 space-y-4">
                <h4 className="font-outfit text-xs tracking-wider uppercase text-[#1C1C21] font-semibold">Receive Formal Ocean Freight Quote</h4>
                
                {!isSubmitted ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Company Contact Name"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="w-full bg-white border border-[#E2E8F0] rounded px-4 py-3 text-xs text-[#1C1C21] placeholder-[#8E8E93]/50 focus:border-[#D4AF37] focus:outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Importer Email Address"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        className="w-full bg-white border border-[#E2E8F0] rounded px-4 py-3 text-xs text-[#1C1C21] placeholder-[#8E8E93]/50 focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-4">
                      <input
                        type="tel"
                        placeholder="WhatsApp / Phone (Include Country Code)"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        className="flex-1 bg-white border border-[#E2E8F0] rounded px-4 py-3 text-xs text-[#1C1C21] placeholder-[#8E8E93]/50 focus:border-[#D4AF37] focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-widest uppercase font-bold rounded flex items-center gap-2 shadow-md transition-all font-outfit"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Request Quote
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E5E7EB] text-[#1C1C21] flex items-start gap-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                    <div className="flex flex-col text-xs">
                      <span className="font-semibold text-[#D4AF37]">Export Request Logged Successfully</span>
                      <span className="leading-relaxed mt-1 text-[#4E4E59]">Thank you {leadName}. Our India-based export desk will compute exact ocean freight to your target port and email you within 4 hours.</span>
                      <button 
                        type="button" 
                        onClick={handleReset} 
                        className="text-[10px] underline hover:text-[#1C1C21] text-[#D4AF37] font-bold text-left mt-3 uppercase tracking-wider transition-colors"
                      >
                        New Estimation
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </div>
          </form>

          {/* Right Side: Outputs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Calculation summary card */}
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 flex flex-col justify-between h-full shadow-sm text-[#1C1C21]">
              
              <div className="space-y-6">
                <div className="border-b border-black/5 pb-4">
                  <span className="text-[10px] tracking-wider uppercase text-[#D4AF37] font-bold">Calculation Summary</span>
                  <h3 className="font-outfit text-xl font-bold text-[#1C1C21] mt-1">Cargo Loading Capacity</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#4E4E59]">Estimated Weight</span>
                    <div className="font-mono text-2xl font-bold text-[#1C1C21] mt-1">
                      {totalWeightTons.toFixed(2)} <span className="text-xs font-sans text-[#4E4E59] font-normal">Tons</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#4E4E59]">Total Area</span>
                    <div className="font-mono text-2xl font-bold text-[#1C1C21] mt-1">
                      {totalSqm.toFixed(1)} <span className="text-xs font-sans text-[#4E4E59] font-normal">SQM</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-black/5" />

                {/* Container Display */}
                <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E5E7EB] flex items-center gap-4">
                  <div className="p-3 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/20 text-[#D4AF37]">
                    <Container className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-[#4E4E59]">20ft Containers Required</span>
                    <span className="font-outfit text-2xl font-bold text-[#1C1C21] mt-0.5">{containersNeeded} Container(s)</span>
                  </div>
                </div>

                {/* Bundles Display */}
                <div className="p-4 rounded-lg bg-[#FAF9F6] border border-[#E5E7EB] flex items-center gap-4">
                  <div className="p-3 bg-black/5 rounded border border-black/10 text-[#1C1C21]">
                    <div className="text-xs font-bold font-mono">BNDL</div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-[#4E4E59]">Wooden Bundles Required</span>
                    <span className="font-outfit text-2xl font-bold text-[#1C1C21] mt-0.5">{bundlesNeeded} Crate(s)</span>
                  </div>
                </div>

                <div className="h-px bg-black/5" />

                {/* Routing & Logistic recommendations */}
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center text-[#4E4E59]">
                    <span>Standard Density:</span>
                    <span className="text-[#1C1C21] font-mono font-medium">{currentStone?.density || '2.70 g/cm³'}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#4E4E59]">
                    <span>Cargo Target Port:</span>
                    <span className="text-[#1C1C21] text-right font-medium max-w-xs">{destination === 'US' ? 'US East/West Coast' : destination === 'UK' ? 'UK Ports' : 'Jebel Ali / Dammam'}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#4E4E59]">
                    <span>Departure Hub India:</span>
                    <span className="text-[#1C1C21] text-right font-medium">{recommendedPort}</span>
                  </div>
                </div>

              </div>

              {/* Warning warning indicator if weight is excessive */}
              {totalWeightTons > 150 && (
                <div className="mt-8 p-3 rounded bg-amber-50 border border-amber-200 text-amber-800 flex gap-2 text-[10px] leading-relaxed">
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>High weight block shipment detected. We recommend splitting the Bill of Lading across multiple vessel sailing lines to prevent customs clearance bottlenecks.</span>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
