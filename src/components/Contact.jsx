import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, ChevronRight, Check, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hash = window.location.hash || '';
    if (hash.includes('?product=')) {
      const parts = hash.split('?product=');
      if (parts[1]) {
        const productName = decodeURIComponent(parts[1]);
        setFormData(prev => ({
          ...prev,
          message: `Hello, I would like to get a quote and check container cargo availability for "${productName}". Please provide pricing details.`
        }));
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    try {
      fetch('https://formsubmit.co/ajax/info@pyrosstones.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Contact Inquiry from ${formData.name} (Pyros Stones)`,
          _captcha: 'false',
          _template: 'table',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'N/A',
          country: formData.country || 'N/A',
          product: formData.product || 'General Enquiry',
          message: formData.message
        })
      });
    } catch (err) {
      console.error('Email dispatch error:', err);
    }

    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-[#FAF9F6] text-[#1C1C21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 reveal reveal-slide-up">
          <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-2">Connect With Us</span>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-medium tracking-wide text-[#1C1C21]">
            Pyros Export Desk
          </h1>
          <p className="font-inter text-sm text-[#4E4E59] max-w-2xl mt-4 font-light leading-relaxed">
            Get in touch directly with our commercial logistics handlers to verify pricing structures, container loading schedules, or request custom slab dimensions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-12">
          
          {/* Quick Contact Desk Details (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-sm reveal reveal-slide-left">
            <div>
              <h3 className="font-outfit text-base font-bold text-[#1C1C21] mb-6 border-b border-black/5 pb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
                Logistics Desk Hours
              </h3>
              
              <div className="space-y-6">
                
                {/* Official Email */}
                <a href="mailto:info@pyrosstones.com" className="flex items-start gap-4 group">
                  <div className="p-3 bg-[#FAF9F6] rounded border border-[#E5E7EB] group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all">
                    <Mail className="w-5 h-5 text-[#1C1C21] group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[#4E4E59] font-semibold">Official Email</span>
                    <span className="text-sm font-semibold text-[#1C1C21] mt-1 group-hover:text-[#D4AF37] transition-colors">info@pyrosstones.com</span>
                    <span className="text-[10px] text-[#8E8E93] mt-0.5">Response guaranteed within 4 hours</span>
                  </div>
                </a>

                {/* Hotlines */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FAF9F6] rounded border border-[#E5E7EB] text-[#1C1C21]">
                    <Phone className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[#4E4E59] font-semibold">Direct Desks & Hotlines</span>
                    <a href="tel:+919672111191" className="text-sm font-semibold text-[#1C1C21] mt-1 hover:text-[#D4AF37] transition-colors">Logistics: +91 96721 11191</a>
                    <a href="tel:+917891111557" className="text-sm font-semibold text-[#1C1C21] mt-0.5 hover:text-[#D4AF37] transition-colors">Sales Desk: +91 78911 11557</a>
                  </div>
                </div>

                {/* Corporate Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FAF9F6] rounded border border-[#E5E7EB] text-[#1C1C21]">
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[#4E4E59] font-semibold">Corporate Head Office</span>
                    <span className="text-sm font-semibold text-[#1C1C21] mt-1 leading-relaxed">
                      Udaipur, Rajasthan, India
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Quality Standard Badges */}
            <div className="mt-12 pt-6 border-t border-black/5 flex flex-wrap gap-4 items-center justify-between text-[10px] text-[#4E4E59]">
              <span className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" /> ISO 9001:2015 Cert</span>
              <span className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" /> APEDA Registered</span>
              <span className="flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-[#D4AF37]" /> CAPEXIL Member</span>
            </div>

          </div>

          {/* Lead Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E7EB] rounded-xl p-6 md:p-8 shadow-sm reveal reveal-slide-right delay-200 text-[#1C1C21]">
            <h3 className="font-outfit text-base font-bold text-[#1C1C21] mb-6 border-b border-black/5 pb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
              Direct Lead Inquiry
            </h3>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-medium">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                      className="w-full bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-xs text-[#1C1C21] placeholder-black/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-medium">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Global Stone Importers LLC"
                      className="w-full bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-xs text-[#1C1C21] placeholder-black/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@importer.com"
                      className="w-full bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-xs text-[#1C1C21] placeholder-black/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-medium">Destination Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      placeholder="e.g., United States, United Kingdom, UAE"
                      className="w-full bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-xs text-[#1C1C21] placeholder-black/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-[#4E4E59] mb-2 font-medium">Project Description / Requirements</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Provide details about material specifications (finishes, thickness, quantity, slab dimensions)..."
                    className="w-full bg-white border border-[#E2E8F0] rounded-md px-4 py-3 text-xs text-[#1C1C21] placeholder-black/20 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]/20 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-[0.2em] uppercase font-bold rounded shadow-lg transition-all"
                >
                  Submit Export Inquiry
                </button>

              </form>
            ) : (
              <div className="p-8 rounded-lg bg-[#FAF9F6] border border-[#E5E7EB] flex flex-col items-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-black/5 mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-outfit text-xl font-bold text-[#1C1C21] mb-2">Inquiry Logged</h4>
                <p className="font-inter text-xs text-[#4E4E59] max-w-sm leading-relaxed mb-8">
                  Thank you. Your message has been sent to our corporate export desk. We will evaluate custom pricing and coordinate shipment options immediately.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', company: '', email: '', country: '', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#D4AF37] text-black text-xs tracking-wider uppercase font-semibold rounded hover:bg-[#b59228] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
