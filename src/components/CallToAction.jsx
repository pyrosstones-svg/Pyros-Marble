import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function CallToAction() {
  const handlePricingRedirect = () => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal();
    } else {
      window.location.hash = '#/contact';
    }
  };

  const handleGalleryRedirect = () => {
    window.location.hash = '#/catalog';
  };

  return (
    <section className="py-20 bg-[#FAF9F6] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA Panel */}
        <div className="bg-white border border-[#E5E7EB] text-[#1C1C21] rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 text-left">
          {/* Decorative blur element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-4 text-left">
            <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block">
              RESERVE SLABS TODAY &amp; REQUEST B2B QUOTE
            </span>
            <h3 className="font-cormorant text-3xl sm:text-4xl font-medium tracking-wide text-[#1C1C21] leading-tight">
              Ready to Source Premium Indian Marble &amp; Granite Surfaces?
            </h3>
            <p className="font-inter text-xs sm:text-sm text-[#4E4E59] leading-relaxed font-light">
              Connect with our Udaipur commercial desk to arrange bundle collections, gangsaw thickness tolerance tests, custom size fabrication, and FCL ocean cargo bookings to Saudi Arabia, UAE, Europe, USA, and worldwide destination ports.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
            <button
              onClick={handlePricingRedirect}
              className="px-6 py-4 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-widest uppercase font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              CONNECT EXPORT DESK
            </button>
            <button
              onClick={handleGalleryRedirect}
              className="px-6 py-4 bg-transparent hover:bg-black/5 border border-[#1C1C21]/20 text-[#1C1C21] text-xs tracking-widest uppercase font-bold rounded-xl transition-all flex items-center justify-center gap-2"
            >
              EXPLORE STONE GALLERY
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
