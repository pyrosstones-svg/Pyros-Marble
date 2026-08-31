import React, { useState, useEffect } from 'react';
import { stones } from '../data/stoneData';
import { Container, Scale, Check, ArrowLeft, Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { navigate } from '../utils/navigation';
import CategoryCTA from './CategoryCTA';

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

  // Logistic Engine Calculations: 1 Standard Gangsaw Slab = 320 kg for 20mm (0.32 Tons), 500 kg for 30mm (0.50 Tons)
  const totalSqm = quantity * 5.4;
  const weightPerSlabTons = thickness === 30 ? 0.50 : 0.32;
  const totalWeightTons = quantity * weightPerSlabTons;

  const maxWeightPerContainer = 27.0; // Max 27T limit across all destination ports
  const containersNeeded = Math.ceil(totalWeightTons / maxWeightPerContainer) || 0;
  // Max 7 to 8 wooden A-frame bundles per 20ft heavy container (~55-60 sqm per bundle)
  const bundlesNeeded = Math.ceil(totalSqm / 55) || 0;

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
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500" 
              />
              <span className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-[10px] tracking-wider uppercase font-bold text-[#D4AF37] border border-white/10 shadow-md">
                Finish: {selectedFinish}
              </span>
            </div>
          </div>

          {/* Right Column: Title, Targeted Keywords, Rich Description, Buttons */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] text-[#D4AF37] tracking-[0.25em] uppercase font-bold">
                  Pyros Surfaces Worldwide · Export Grade
                </span>
                <span className="px-2 py-0.5 bg-[#D4AF37]/15 text-[#D4AF37] rounded text-[9px] font-mono font-bold uppercase">
                  SASO & SABER Certified
                </span>
              </div>

              <h1 className="font-cormorant text-4xl sm:text-5xl font-semibold mb-4 text-[#1C1C21] leading-tight">
                {currentStone.name}
              </h1>

              {/* Rich Multi-Paragraph Description */}
              <div className="space-y-3 font-inter text-xs text-[#4E4E59] leading-relaxed font-light mb-6 border-l-2 border-[#D4AF37] pl-4">
                <p>
                  <strong className="text-[#1C1C21] font-semibold">{currentStone.name}</strong> is a premier grade natural {currentStone.category} directly extracted from exclusive quarry reserves in <strong className="text-[#1C1C21] font-semibold">{currentStone.origin}</strong>. Celebrated for its unique veining, natural structural integrity, and high mineral density ({currentStone.density}), this surface brings timeless architectural elegance to luxury commercial developments, high-end residential villas, and hospitality landmarks.
                </p>
                <p>
                  Processed in state-of-the-art automated manufacturing facilities, every slab of {currentStone.name} undergoes Italian gangsaw cutting with strict <strong className="text-[#1C1C21] font-semibold">±1mm thickness calibration tolerance</strong> in standard 20mm and 30mm profiles. Slabs are reinforced with fiberglass net backing and polished using 24-head automated line polishers to achieve an extraordinary <strong className="text-[#1C1C21] font-semibold">95+ Gloss Luster finish</strong>.
                </p>
                <p>
                  Pyros Marble exports {currentStone.name} with complete B2B compliance including SASO / SABER certificates for Saudi Arabia (Jeddah, Dammam, Yanbu Ports), UAE (Jebel Ali), Qatar, USA, and UK. Packed in ISPM-15 compliant fumigated wooden A-frame crates for zero-breakage international freight.
                </p>
              </div>

              {/* Action Buttons: Get a Quote & WhatsApp */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={handleOpenQuote}
                  className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-wider uppercase font-bold rounded-lg shadow-md transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Get a Quote
                </button>

                <a
                  href={`https://wa.me/919672111191?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs tracking-wider uppercase font-bold rounded-lg shadow-md transition-all flex items-center gap-2 hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  WhatsApp Direct Inquiry
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
              <h3 className="font-outfit text-sm font-bold uppercase tracking-wider text-[#1C1C21] border-b border-[#E5E7EB] pb-3 flex items-center justify-between">
                <span>Technical Specifications</span>
                <span className="text-[10px] font-mono text-[#D4AF37] bg-[#FAF9F6] border border-[#EADCC9] px-2 py-0.5 rounded">ISO 9001 Certified</span>
              </h3>
              
              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Quarry Origin:</span>
                <span>{currentStone.origin}</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Material Category:</span>
                <span className="uppercase font-bold text-[#D4AF37]">{currentStone.category}</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Density & Absorption:</span>
                <span className="font-mono">{currentStone.density} · Water Abs. {currentStone.waterAbsorption}</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Available Finishes:</span>
                <span>High Gloss · Polished · Honed · Leathered · Brushed</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Standard Thickness:</span>
                <span className="font-mono font-bold text-[#1C1C21]">20 mm & 30 mm Gangsaw (Tolerance ±1mm)</span>
              </div>

              <div className="py-1.5 border-b border-[#E5E7EB]/60 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Export Formats:</span>
                <span className="font-mono">Gangsaw Slabs (240-300 × 120-190 cm) · Tiles (60×60, 60×30 cm)</span>
              </div>

              <div className="py-1.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                <span className="font-semibold text-[#1C1C21]">Customs HS Code:</span>
                <span className="font-mono font-bold text-[#1C1C21]">{hsCode}</span>
              </div>
            </div>

            {/* Right Column: Export Checkpoints with Checkmarks ✓ */}
            <div className="space-y-4 text-xs font-inter text-[#1C1C21]">
              <h3 className="font-outfit text-sm font-bold uppercase tracking-wider text-[#1C1C21] border-b border-[#E5E7EB] pb-3 flex items-center justify-between">
                <span>Quality Assurance & Export Standard</span>
                <span className="text-[10px] font-mono text-[#D4AF37] bg-[#FAF9F6] border border-[#EADCC9] px-2 py-0.5 rounded">100% Export Grade</span>
              </h3>

              <div className="space-y-3.5 pt-1">
                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold text-sm leading-none">✓</span>
                  <span><strong>Italian Gangsaw Slicing:</strong> Uniform 20mm & 30mm slab calibration (±1mm).</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold text-sm leading-none">✓</span>
                  <span><strong>24-Head Line Polish:</strong> Superior mirror shine with 95+ Gloss Luster rating.</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold text-sm leading-none">✓</span>
                  <span><strong>ISPM-15 Wooden Crates:</strong> Fumigated seaworthy A-frame packaging with steel strapping.</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold text-sm leading-none">✓</span>
                  <span><strong>SASO & SABER Approved:</strong> Full trade compliance for Saudi Arabia & GCC imports.</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold text-sm leading-none">✓</span>
                  <span><strong>Min Order & Delivery:</strong> 1 × 20ft container load (~20-27 Tons depending on port limit).</span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#D4AF37] font-bold text-sm leading-none">✓</span>
                  <span><strong>Departure Gateways:</strong> Fast-track clearance via {recommendedPort}.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Banner */}
          <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-center text-xs text-[#4E4E59] font-medium flex flex-col sm:flex-row items-center justify-center gap-4">
            <span>🛡️ Trusted by natural stone importers, architects & contractors in 45+ countries.</span>
            <span className="text-[#D4AF37] font-bold">Formal FOB/CIF Quote within 24 Hours.</span>
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
                  <option value="US">USA & Canada (Max 27T Limit)</option>
                  <option value="UK">UK & Europe (Max 27T Limit)</option>
                  <option value="Arab">GCC & Middle East (Max 27T Limit)</option>
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

        {/* PRODUCT SPECIFIC B2B SEO FAQ SECTION */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-sm mb-16">
          <div className="text-center mb-8">
            <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-1">
              B2B Trade & Export FAQs
            </span>
            <h3 className="font-cormorant text-2xl sm:text-4xl font-medium text-[#1C1C21]">
              Frequently Asked Questions About {currentStone.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#4E4E59]">
            <div className="p-5 bg-[#FAF9F6] border border-[#EADCC9]/50 rounded-xl space-y-2">
              <h4 className="font-outfit font-bold text-[#1C1C21] text-sm flex items-center gap-2">
                <span className="text-[#D4AF37]">Q:</span> What thickness & slab sizes are available for {currentStone.name}?
              </h4>
              <p className="font-light leading-relaxed">
                Pyros Marble supplies {currentStone.name} in standard Italian gangsaw calibrated thicknesses of <strong>20mm and 30mm</strong> with a strict ±1mm tolerance. Standard gangsaw slab sizes range from 240-300 cm length by 120-190 cm height. We also process custom cut-to-size floor tiles (60×60 cm, 60×30 cm) for major commercial projects.
              </p>
            </div>

            <div className="p-5 bg-[#FAF9F6] border border-[#EADCC9]/50 rounded-xl space-y-2">
              <h4 className="font-outfit font-bold text-[#1C1C21] text-sm flex items-center gap-2">
                <span className="text-[#D4AF37]">Q:</span> Is SASO / SABER certification provided for Saudi Arabia exports?
              </h4>
              <p className="font-light leading-relaxed">
                Yes, 100%. All {currentStone.name} shipments exported to Saudi Arabia come with complete <strong>SASO and SABER certificate compliance</strong>, factory quality inspection reports, Certificate of Origin (COO), and direct container dispatch to Jeddah Islamic Port, Dammam Port, or Yanbu Port.
              </p>
            </div>

            <div className="p-5 bg-[#FAF9F6] border border-[#EADCC9]/50 rounded-xl space-y-2">
              <h4 className="font-outfit font-bold text-[#1C1C21] text-sm flex items-center gap-2">
                <span className="text-[#D4AF37]">Q:</span> How is {currentStone.name} packaged for ocean container freight?
              </h4>
              <p className="font-light leading-relaxed">
                Every slab is polished, backed with fiberglass reinforcement mesh, and packed into heavy-duty <strong>ISPM-15 compliant fumigated wooden A-frame crates</strong>. Slabs are protected with plastic sheeting, foam corner guards, and bound with high-tensile steel strapping for zero-breakage transit.
              </p>
            </div>

            <div className="p-5 bg-[#FAF9F6] border border-[#EADCC9]/50 rounded-xl space-y-2">
              <h4 className="font-outfit font-bold text-[#1C1C21] text-sm flex items-center gap-2">
                <span className="text-[#D4AF37]">Q:</span> What is the Minimum Order Quantity (MOQ) and lead time?
              </h4>
              <p className="font-light leading-relaxed">
                The standard export MOQ is <strong>1 × 20ft container load</strong> (approx. 400-450 sqm in 20mm or 270-300 sqm in 30mm). Production and gangsaw slab calibration lead time is typically 10 to 14 days, followed by port container lashing and ocean freight booking.
              </p>
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
                      navigate(`/product/${variant.id}`);
                    }}
                    className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-[#E5E7EB] hover:border-[#D4AF37]/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 relative">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
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

        {/* Dynamic Category CTA for the current stone */}
        <CategoryCTA category={currentStone.category} />

      </div>
    </section>
  );
}
