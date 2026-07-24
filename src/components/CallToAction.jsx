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
        <div className="bg-white border border-[#E5E7EB] text-[#1C1C21] rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Decorative blur element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-4 text-center md:text-left">
            <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
              Reserve Slabs Today
            </span>
            <h3 className="font-cormorant text-3xl sm:text-4xl font-medium tracking-wide text-[#1C1C21] leading-tight">
              Ready to Source Premium Surfaces?
            </h3>
            <p className="font-inter text-xs text-[#4E4E59] leading-relaxed font-light">
              Connect with our Udaipur commercial desk to arrange bundle collections, thickness tolerance tests, and FCL ocean cargo bookings.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
            <button
              onClick={handlePricingRedirect}
              className="px-6 py-4 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-widest uppercase font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-black" />
              Connect Export Desk
            </button>
            <button
              onClick={handleGalleryRedirect}
              className="px-6 py-4 bg-transparent hover:bg-black/5 border border-[#1C1C21]/20 text-[#1C1C21] text-xs tracking-widest uppercase font-bold rounded-lg transition-all flex items-center justify-center gap-2"
            >
              Stone Gallery
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
