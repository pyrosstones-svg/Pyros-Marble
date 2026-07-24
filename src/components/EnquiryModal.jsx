import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Package, Globe, Phone, Mail, User, MessageSquare, ChevronDown } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, defaultProduct = '' }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: defaultProduct,
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Sync defaultProduct when modal opens
  useEffect(() => {
    if (isOpen) {
      setForm(f => ({ ...f, product: defaultProduct }));
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen, defaultProduct]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.country.trim()) newErrors.country = 'Country is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    try {
      fetch('https://formsubmit.co/ajax/info@pyrosstones.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Global Stone Enquiry for ${form.product} from ${form.name}`,
          _captcha: 'false',
          _template: 'table',
          name: form.name,
          email: form.email,
          phone: form.phone,
          country: form.country,
          product: form.product,
          quantity_sqm: form.quantity || 'N/A',
          notes: form.notes || 'No extra notes'
        })
      });
    } catch (err) {
      console.error('Email dispatch error:', err);
    }

    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full bg-white border ${errors[field] ? 'border-red-500' : 'border-[#E2E8F0]'} rounded-lg px-4 py-3 font-inter text-sm text-[#1C1C21] placeholder-[#8E8E93]/60 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 focus:border-[#D4AF37] transition-all`;

  const products = [
    'Indian Carrara White Marble',
    'Absolute Black Granite',
    'Titanium Gold Quartzite',
    'Indian Statuario Marble',
    'Black Galaxy Granite',
    'Steel Grey Granite',
    'Taj Mahal Quartzite',
    'Calacatta Quartz',
    'Indian Lilac Marble',
    'Teakwood Sandstone',
    'Kota Blue Limestone',
    'Other / Custom Requirement',
  ];

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl bg-[#FAF9F6] rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up max-h-[95vh] overflow-y-auto border border-[#E5E7EB] text-[#1C1C21]"
        onClick={e => e.stopPropagation()}
        style={{ animation: 'modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Header Bar */}
        <div className="bg-white border-b border-[#E5E7EB] px-8 py-6 flex items-start justify-between gap-4">
          <div>
            <div className="font-outfit text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-1">
              Pyros Export Desk
            </div>
            <h2 className="font-cormorant text-2xl font-medium text-[#1C1C21]">
              Send Enquiry
            </h2>
            <p className="font-inter text-xs text-[#4E4E59] mt-1 font-light">
              Our commercial team responds within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-[#1C1C21] hover:text-[#D4AF37]" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          {submitted ? (
            /* Success State */
            <div className="flex flex-col items-center text-center py-12 gap-4">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="font-cormorant text-2xl font-medium text-[#1C1C21]">Enquiry Received!</h3>
              <p className="font-inter text-sm text-[#4E4E59] font-light max-w-sm">
                Thank you, <strong className="text-[#1C1C21] font-semibold">{form.name}</strong>! Our export desk will contact you at <strong className="text-[#D4AF37] font-semibold">{form.email}</strong> within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-8 py-3 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-widest uppercase font-bold rounded-lg transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>

              {/* Row 1: Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-outfit text-[10px] uppercase tracking-widest text-[#4E4E59] font-bold mb-1.5">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8E93]" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={`${inputClass('name')} pl-10`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block font-outfit text-[10px] uppercase tracking-widest text-[#4E4E59] font-bold mb-1.5">
                    Company Name
                  </label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8E93]" />
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Luxury Interiors LLC"
                      className={`${inputClass('company')} pl-10`}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-outfit text-[10px] uppercase tracking-widest text-[#4E4E59] font-bold mb-1.5">
                    Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8E93]" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`${inputClass('email')} pl-10`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block font-outfit text-[10px] uppercase tracking-widest text-[#4E4E59] font-bold mb-1.5">
                    Phone / WhatsApp <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8E93]" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 212 555 0100"
                      className={`${inputClass('phone')} pl-10`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 3: Country + Product */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-outfit text-[10px] uppercase tracking-widest text-[#4E4E59] font-bold mb-1.5">
                    Country <span className="text-[#D4AF37]">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8E93]" />
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="United States"
                      className={`${inputClass('country')} pl-10`}
                    />
                  </div>
                  {errors.country && <p className="text-red-500 text-[10px] mt-1">{errors.country}</p>}
                </div>
                <div>
                  <label className="block font-outfit text-[10px] uppercase tracking-widest text-[#4E4E59] font-bold mb-1.5">
                    Product Interest
                  </label>
                  <div className="relative">
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className={`${inputClass('product')} appearance-none pr-8 bg-white text-[#1C1C21]`}
                    >
                      <option value="">Select a product...</option>
                      {products.map(p => (
                        <option key={p} value={p} className="bg-white text-[#1C1C21]">{p}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E8E93] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Row 4: Quantity */}
              <div>
                <label className="block font-outfit text-[10px] uppercase tracking-widest text-[#4E4E59] font-bold mb-1.5">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 1 FCL Container (~20 sqm slabs)"
                  className={inputClass('quantity')}
                />
              </div>

              {/* Row 5: Message */}
              <div>
                <label className="block font-outfit text-[10px] uppercase tracking-widest text-[#4E4E59] font-bold mb-1.5">
                  Message / Special Requirements
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-[#8E8E93]" />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, thickness requirements, finish type (polished/honed), delivery port, etc."
                    className={`${inputClass('message')} pl-10 resize-none`}
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between border-t border-[#E5E7EB]">
                <p className="font-inter text-[10px] text-[#4E4E59] font-light">
                  📦 We reply with FOB/CIF pricing within 24 hrs.
                </p>
                <button
                  type="submit"
                  className="flex-shrink-0 px-8 py-3.5 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-widest uppercase font-bold rounded-lg shadow-md transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-[#D4AF37]/20"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
