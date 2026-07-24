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

  // Logic Calculations
  const density = currentStone ? parseFloat(currentStone.density) : 2.7;
  
  let totalSqm = 0;
  if (quantityType === 'slabs') {
    // Assume average slab size is 3.0m x 1.8m = 5.4 sqm
    totalSqm = quantity * 5.4;
  } else {
    totalSqm = quantity;
  }

  const thicknessInMeters = thickness / 1000;
  const totalVolumeM3 = totalSqm * thicknessInMeters;
  const totalWeightTons = totalVolumeM3 * density;

  const maxWeightPerContainer = destination === 'US' ? 20.5 : destination === 'UK' ? 23.5 : 26.5;
  const containersNeeded = Math.ceil(totalWeightTons / maxWeightPerContainer) || 0;

  const bundleCapacity = thickness >= 20 ? 10 : 13;
  const totalSlabsCount = quantityType === 'slabs' ? quantity : Math.ceil(quantity / 5.4);
  const bundlesNeeded = Math.ceil(totalSlabsCount / bundleCapacity) || 0;

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
          <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-semibold mb-2">Export Configurator</span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-medium tracking-wide text-[#1C1C21]">
            Container Load Estimator
          </h2>
          <p className="font-inter text-sm text-[#4E4E59] max-w-2xl mt-4 font-light leading-relaxed">
            Configure custom marble or granite slab shipments to calculate volumetric displacement, container gross weight, and wooden bundle packing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Inputs (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 shadow-sm">
            <h3 className="font-outfit text-base font-bold text-[#1C1C21] mb-6 border-b border-black/5 pb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#D4AF37]" />
              Shipping Specifications
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Stone variant selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-semibold">Select Stone Variant</label>
                  <select
                    value={selectedStoneId}
                    onChange={(e) => setSelectedStoneId(e.target.value)}
                    className="w-full bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-xs text-[#1C1C21] focus:border-[#D4AF37] focus:outline-none"
                  >
                    {stones.map((s) => (
                      <option key={s.id} value={s.id} className="bg-white text-[#1C1C21]">{s.name} ({s.category.toUpperCase()})</option>
                    ))}
                  </select>
                </div>

                {/* Thickness */}
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-semibold">Slab Thickness</label>
                  <select
                    value={thickness}
                    onChange={(e) => setThickness(parseInt(e.target.value))}
                    className="w-full bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-xs text-[#1C1C21] focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value={20} className="bg-white text-[#1C1C21]">20 mm (Premium Countertops)</option>
                    <option value={30} className="bg-white text-[#1C1C21]">30 mm (Heavy-Duty & Exterior)</option>
                  </select>
                </div>
              </div>

              {/* Quantity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-semibold">Quantity Mode</label>
                  <div className="grid grid-cols-2 gap-2 bg-black/5 p-1 border border-[#E2E8F0] rounded-md">
                    <button
                      type="button"
                      onClick={() => { setQuantityType('slabs'); setQuantity(120); }}
                      className={`py-2 text-[10px] tracking-wider uppercase font-semibold rounded transition-all ${
                        quantityType === 'slabs' ? 'bg-[#D4AF37] text-black shadow-sm font-bold' : 'text-[#4E4E59] hover:text-[#1C1C21]'
                      }`}
                    >
                      Slabs Count
                    </button>
                    <button
                      type="button"
                      onClick={() => { setQuantityType('sqm'); setQuantity(650); }}
                      className={`py-2 text-[10px] tracking-wider uppercase font-semibold rounded transition-all ${
                        quantityType === 'sqm' ? 'bg-[#D4AF37] text-black shadow-sm font-bold' : 'text-[#4E4E59] hover:text-[#1C1C21]'
                      }`}
                    >
                      Total Area (SQM)
                    </button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-semibold">
                    {quantityType === 'slabs' ? 'Number of Slabs' : 'Total Area (Sq. Meters)'}
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
                    { code: 'US', label: 'USA (Max 20.5 Tons)', info: 'Strict 20ft road limits' },
                    { code: 'UK', label: 'UK / Europe (Max 23.5 Tons)', info: 'Standard EU highway' },
                    { code: 'Arab', label: 'Arab Nations (Max 26.5 Tons)', info: 'High cargo payload allowance' }
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

            </form>
          </div>

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
                    <span className="text-[#1C1C21] font-mono font-medium">{density.toFixed(2)} g/cm³</span>
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
