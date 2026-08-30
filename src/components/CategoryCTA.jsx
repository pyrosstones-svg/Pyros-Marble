import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { navigate } from '../utils/navigation';

const CATEGORY_DATA = {
  marble: {
    tagline: 'DIRECT FROM INDIAN MINES & GANGSAW PROCESSING UNITS',
    title: 'Looking for a Specific Indian Marble Variety or Custom Slab Size?',
    subtitle: 'We supply complete ranges of Makrana White, Indian Statuario, Fantasy Brown, Rainforest Green, and 50+ export-grade marble varieties. If you need any specific color, vein pattern, or calibrated thickness (18mm, 20mm, 30mm), our export desk will source and fabricate it directly from the quarry.',
    productParam: 'Indian Marble'
  },
  granite: {
    tagline: 'NORTH & SOUTH INDIAN QUARRY NETWORK',
    title: 'Need Bulk Commercial Granite Slabs, Tiles, or Architectural Pavers?',
    subtitle: 'From Absolute Black, Black Galaxy, and Tan Brown to Vizag Blue and Hassan Green — we supply the full spectrum of Indian granites in gangsaw slabs, calibrated kitchen countertops, cut-to-size project tiles, and heavy exterior paving.',
    productParam: 'Indian Granite'
  },
  quartzite: {
    tagline: 'EXOTIC & BACKLIT LUXURY NATURAL STONE',
    title: 'Searching for Exotic Indian Quartzite Slabs or Feature Surfaces?',
    subtitle: 'We supply ultra-durable crystalline quartzites including Patagonia, Crystallo, Taj Mahal, and Azul Novae. Ideal for backlit luxury countertops, statement kitchen islands, and iconic commercial facades.',
    productParam: 'Indian Quartzite'
  },
  sandstone: {
    tagline: 'ARCHITECTURAL PAVERS, POOL COPINGS & MASONRY',
    title: 'Sourcing Indian Sandstone Slabs, Calibrated Pavers or Patios?',
    subtitle: 'Available in Kandla Grey, Mint White, Autumn Brown, Teakwood, and Raj Green. We supply calibrated project paving packs, hand-chiseled cobbles, pool copings, and wall claddings for European, UK & USA landscape architecture.',
    productParam: 'Indian Sandstone'
  },
  limestone: {
    tagline: 'HEAVY-DUTY COMMERCIAL & ARCHITECTURAL FLOORING',
    title: 'Require Kota Blue, Kota Brown, or Calibrated Limestone Tiles?',
    subtitle: 'We fabricate and export high-density Kota Stone, Tandur Yellow, and Lime Black for commercial plazas, airports, hospitals, railway terminals, and public walkway flooring projects.',
    productParam: 'Indian Limestone / Kota Stone'
  },
  slate: {
    tagline: 'NATURAL RIVEN & SPLIT-FACE MASONRY STONE',
    title: 'Looking for Split-Face Slate Slabs, Tiles, or Roofing Sheets?',
    subtitle: 'Supplying Silver Grey, Kund Multi, Copper Slate, and California Gold in calibrated tiles, natural cleft split-face elevation sheets, and moisture-resistant bathroom and outdoor claddings.',
    productParam: 'Indian Slate Stone'
  },
  'wall-cladding': {
    tagline: '3D ELEVATION LEDGESTONE & STACKED PANELS',
    title: 'Need Custom 3D Stone Wall Cladding or Elevation Strips for Projects?',
    subtitle: 'We fabricate interlocking Z-shape ledgestone panels, split-face marble strips, and stacked quartzite elevation veneers for luxury villas, commercial facades, and interior accent walls.',
    productParam: 'Stone Wall Cladding'
  },
  porcelain: {
    tagline: 'LARGE FORMAT SINTERED SURFACES (1600x3200mm)',
    title: 'Looking for Large Format Porcelain Slabs or Continuous Bookmatch?',
    subtitle: 'We supply 12mm, 15mm, and 20mm sintered porcelain slabs with mirror-polished, silk matte, and rock-face finishes. Zero water absorption and stain-proof for luxury kitchen benchtops and seamless continuous wall facades.',
    productParam: 'Porcelain & Sintered Slabs'
  }
};

export default function CategoryCTA({ 
  category = 'marble', 
  title: customTitle, 
  subtitle: customSubtitle, 
  tagline: customTagline 
}) {
  const content = CATEGORY_DATA[category.toLowerCase()] || CATEGORY_DATA['marble'];

  const displayTagline = customTagline || content.tagline;
  const displayTitle = customTitle || content.title;
  const displaySubtitle = customSubtitle || content.subtitle;
  const productParam = content.productParam;

  const handleContactRedirect = () => {
    navigate(`/contact?product=${encodeURIComponent(productParam)}`);
  };

  const handleEnquiryOpen = () => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal(productParam);
    } else {
      navigate(`/contact?product=${encodeURIComponent(productParam)}`);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Pyros Stones, I am exploring your ${productParam} collection and would like to inquire about slab availability, custom cut sizes, and B2B export pricing.`
  );

  return (
    <section className="mt-14 pt-4 pb-8">
      <div className="relative rounded-2xl bg-gradient-to-br from-[#1C1C21] via-[#24242B] to-[#161619] text-white p-8 sm:p-10 lg:p-12 border border-[#D4AF37]/30 shadow-xl overflow-hidden">
        
        {/* Background Ambient Glows & Grid Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative z-10">
          
          {/* Header Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-full text-[#D4AF37] text-[10px] sm:text-[11px] font-mono font-bold tracking-widest uppercase mb-5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{displayTagline}</span>
          </div>

          {/* Title, Subtitle & Action Buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3.5">
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-[1.2]">
                {displayTitle}
              </h2>
              <p className="font-inter text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl">
                {displaySubtitle}
              </p>
            </div>

            {/* Action Buttons Box */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center lg:items-end w-full">
              <button
                onClick={handleContactRedirect}
                className="w-full sm:w-auto lg:w-full px-6 py-3.5 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-widest uppercase font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Contact Export Desk / Get Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 w-full">
                <a
                  href={`https://wa.me/919672111191?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </a>

                <button
                  onClick={handleEnquiryOpen}
                  className="px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-neutral-200 hover:text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-[#D4AF37]" />
                  <span>Quick Inquiry</span>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
