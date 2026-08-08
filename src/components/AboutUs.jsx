import React, { useRef, useState, useEffect } from 'react';
import { Shield, Award, Clock, Users, CheckCircle, HelpCircle, ArrowRight, Layers, Sparkles, Ship, Landmark, Quote, Globe, X, Target, Eye, Compass, CheckCircle2 } from 'lucide-react';

// Intersection Observer based progress bar component
function ProgressBar({ label, percentage, icon: Icon }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setWidth(percentage);
        }, 150);
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1C1C21]">
        <span className="flex items-center gap-2">
          {Icon && <Icon className="w-4 h-4 text-[#D4AF37]" />}
          {label}
        </span>
        <span className="text-[#D4AF37] font-mono">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-neutral-200/60 rounded-full overflow-hidden border border-black/5">
        <div
          className="h-full bg-gradient-to-r from-[#D4AF37] to-[#b59228] rounded-full progress-bar-fill shadow-[0_0_10px_rgba(212,175,55,0.3)]"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function AboutUs() {
  const [showStoryModal, setShowStoryModal] = useState(false);
  const pillars = [
    {
      step: '01',
      title: 'Curated Natural & Engineered Stone Portfolio',
      desc: 'From luxurious Indian white marble and high-performance granite to sophisticated engineered quartz surfaces and premium porcelain, every product is selected and processed to meet strict international standards. We provide customized slab dimensions (20mm & 30mm thickness), custom finishes, and edge profiles.'
    },
    {
      step: '02',
      title: 'Foundation of Gangsaw Quality & Inspection',
      desc: 'Quality is the foundation of everything we do. Every raw block, gangsaw slab, tile, and finished product undergoes multi-stage quality inspection throughout sourcing, Italian line polishing, fumigated wooden packaging, and container shipment in collaboration with trusted quarries.'
    },
    {
      step: '03',
      title: 'Dependable B2B Partnerships & Global Logistics',
      desc: 'We value communication, transparency, and consistency. From the first inquiry to final FCL ocean delivery, we work closely with commercial importers and architects, providing responsive service, efficient port logistics via Mundra & Chennai, and dedicated procurement support.'
    },
    {
      step: '04',
      title: 'Timeless Innovation & Sustainable Quarrying',
      desc: 'We remain committed to surface innovation, responsible quarrying, and continuous process improvement. We embrace automated Italian diamond saw technologies and zero-waste water recycling processes while respecting the natural stone resources of India.'
    }
  ];

  return (
    <section className="py-24 bg-[#FAF9F6] text-[#1C1C21] border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Title (Aligned matching 2-Column Split Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 border-b border-[#EADCC9] pb-8 text-left reveal reveal-slide-up">
          <div className="lg:col-span-6">
            <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">
              INDIA'S STONE HERITAGE &amp; QUARRY LOGISTICS
            </span>
            <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1C1C21] leading-tight">
              About Pyros Stones – India's Premier Marble &amp; Granite Exporter
            </h1>
          </div>
          <div className="lg:col-span-6">
            <p className="font-inter text-xs sm:text-sm text-[#4E4E59] leading-relaxed font-light">
              Founded in Rajasthan, India—a renowned hub of natural stone extraction and processing—Pyros Stones is a premier global supplier of gangsaw-calibrated natural marble slabs, granite, quartzite, sandstone, and engineered quartz surfaces. Serving architects, luxury interior designers, commercial developers, contractors, and stone distributors across Saudi Arabia, UAE, Europe, the USA, and over 100 countries worldwide.
            </p>
          </div>
        </div>

        {/* Corporate Profile Section (Tilux Overlapping Images + Philosophy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28">

          {/* LEFT SIDE: Overlapping Image Box with Rotating Badge (5 Columns) */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start reveal reveal-slide-left">

            {/* Main Background Image */}
            <div className="w-[85%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB] bg-neutral-100">
              <img
                src="/about_us_main_1784367166223.png"
                alt="Rajasthan Quarry Work"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlapping Small Image */}
            <div className="absolute bottom-[-8%] right-0 w-[55%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-neutral-100">
              <img
                src="/about_us_factory_1784367176961.png"
                alt="Calibrated Workshop Slabs"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rotating Circular Text Badge */}
            <div className="absolute top-[40%] left-[-6%] lg:left-[-10%] w-28 h-28 z-20 select-none hidden sm:block">
              <div className="relative w-full h-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                  </defs>
                  <text className="text-[7.5px] fill-[#D4AF37] font-bold tracking-[0.22em] uppercase font-mono">
                    <textPath xlinkHref="#circlePath">
                      PYROS STONE EXPORTS · ESTD INDIA ·
                    </textPath>
                  </text>
                </svg>
                <div
                  onClick={() => {
                    if (window.openEnquiryModal) {
                      window.openEnquiryModal();
                    } else {
                      window.location.hash = '#/contact';
                    }
                  }}
                  className="absolute w-12 h-12 bg-[#D4AF37] text-black rounded-full flex items-center justify-center shadow-lg border border-white/20 cursor-pointer hover:bg-black hover:text-[#D4AF37] transition-all duration-300"
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Content & Dynamic Progress Bars (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 reveal reveal-slide-right delay-200 text-left">
            <div className="space-y-4">
              <span className="font-outfit text-xs tracking-widest text-[#D4AF37] uppercase font-bold">
                OUR PURPOSE &amp; ARCHITECTURAL VISION
              </span>
              <h2 className="font-cormorant text-3xl sm:text-5xl font-medium text-[#1C1C21] leading-tight">
                India's Premier Marble Exporter &amp; Granite Supplier for Global Architecture
              </h2>
              <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">
                At Pyros Stones, we believe every stone tells a story. Formed over millions of years by natural geological forces, each slab of Indian marble and granite possesses a unique character, vein pattern, and structural identity. As a leading Marble Exporter from India and trusted Granite Supplier India, our purpose is to preserve that natural beauty while engineering gangsaw-calibrated slabs that inspire luxury architectural facades, executive commercial flooring, and high-end residential interiors worldwide.
              </p>
              <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">
                We specialize in manufacturing and exporting an extensive portfolio of Indian white marble, absolute black granite, engineered quartz, porcelain slabs, onyx, limestone, sandstone, travertine, slate, and custom stone cladding solutions that embody elegance, structural durability, and international quality standards.
              </p>
            </div>

            {/* Dynamic Progress Bars */}
            <div className="space-y-5 border-y border-[#E5E7EB] py-6">
              <ProgressBar
                label="Italian Thickness Calibration (Deviation ±1mm)"
                percentage={99}
                icon={Layers}
              />
              <ProgressBar
                label="Gloss Luster Polish Rating (24-head line polishers)"
                percentage={95}
                icon={Sparkles}
              />
              <ProgressBar
                label="Logistics & Customs Clearing Speed (APEDA Clearance)"
                percentage={100}
                icon={Ship}
              />
            </div>
          </div>

        </div>

        {/* Leadership Spotlight Section */}
        <div className="bg-[#FFFFFF] border border-[#EADCC9] rounded-2xl p-8 md:p-12 mb-28 text-left reveal reveal-slide-up shadow-lg overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Portrait Frame with Gold Accents (5 Columns) */}
            <div className="lg:col-span-5 relative reveal reveal-slide-left flex justify-center lg:justify-start">
              <div className="w-[85%] aspect-[3/4] sm:w-[320px] rounded-2xl overflow-hidden shadow-2xl relative border border-[#EADCC9] bg-neutral-100 group">
                <img
                  src="/founder.jpeg"
                  alt="Naresh Dhuwadiya, Founder"
                  onError={(e) => {
                    if (e.target.src.includes('/founder.jpeg')) {
                      e.target.src = "/founder-1.jpeg";
                    } else if (e.target.src.includes('/founder-1.jpeg')) {
                      e.target.src = "/PyrosStones_logoV0004.png";
                    } else {
                      e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop";
                    }
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Floating Gold Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#1C1C21]/95 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl text-left">
                  <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] font-bold uppercase block mb-1">FOUNDER & MD</span>
                  <h4 className="font-outfit text-sm font-bold text-white">Naresh Dhuwadiya</h4>
                </div>
              </div>
            </div>

            {/* Right Column: Founder Vision Message & CTA (7 Columns) */}
            <div className="lg:col-span-7 space-y-8 text-left reveal reveal-slide-right delay-200">
              <div className="space-y-4">
                <span className="font-outfit text-xs tracking-widest text-[#D4AF37] uppercase font-bold block mb-2">Leadership Spotlight</span>
                <h2 className="font-cormorant text-3xl sm:text-5xl font-medium text-[#1C1C21] leading-tight">
                  Built on Quality, Integrity, and Consistency
                </h2>

                {/* Quote Panel */}
                <div className="border-l-4 border-[#D4AF37] pl-6 italic font-cormorant text-lg sm:text-xl text-[#1C1C21]/90 my-6 leading-relaxed bg-[#FAF9F6] py-3 rounded-r-lg">
                  “ Led by our founder, Naresh Dhuwadiya, Pyros Stones has grown with a clear vision—to build a company recognized not only for premium-quality stone but also for integrity, consistency, and long-term partnerships. ”
                </div>

                <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">
                  As a dedicated team with over 15 years of experience in the stone export industry, we have developed deep expertise in sourcing, manufacturing, quality assurance, logistics, and international trade. This collective knowledge enables us to deliver solutions that consistently exceed global architectural expectations.
                </p>
              </div>

              {/* Stats summary row */}
              <div className="grid grid-cols-2 gap-6 border-y border-[#EADCC9] py-6">
                <div>
                  <span className="font-outfit text-2xl sm:text-3xl font-bold text-[#D4AF37] block">15+ Years</span>
                  <span className="text-[11px] text-[#8E8E93] font-light uppercase tracking-wider block mt-1">Export Excellence</span>
                </div>
                <div>
                  <span className="font-outfit text-2xl sm:text-3xl font-bold text-[#D4AF37] block">100% Secure</span>
                  <span className="text-[11px] text-[#8E8E93] font-light uppercase tracking-wider block mt-1">Fumigated Packaging</span>
                </div>
              </div>

              <div>
                <button
                  onClick={() => setShowStoryModal(true)}
                  className="px-6 py-3.5 bg-transparent border border-[#D4AF37] text-[#1C1C21] hover:bg-[#D4AF37] hover:text-black text-xs tracking-wider uppercase font-semibold rounded-lg transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  Read Full Story
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Read Full Story Modal */}
        {showStoryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white border border-[#EADCC9] rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">

              {/* Close Button */}
              <button
                onClick={() => setShowStoryModal(false)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 p-2 rounded-full hover:bg-neutral-100 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]">
                    <img
                      src="/founder.jpeg"
                      alt="Naresh Dhuwadiya"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.target.src = "/founder-1.jpeg"; }}
                    />
                  </div>
                  <div>
                    <span className="font-outfit text-xs font-bold tracking-widest text-[#D4AF37] uppercase block">Leadership Spotlight</span>
                    <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21]">The Pyros Stones Journey</h3>
                  </div>
                </div>

                <div className="border-t border-[#EADCC9] pt-4 space-y-4 font-inter text-xs text-[#4E4E59] leading-relaxed font-light">
                  <p>
                    Founded in Rajasthan—the heartland of India's natural stone heritage—Pyros Stones was established by Naresh Dhuwadiya with a singular mission: to supply world-class natural marble, granite, quartzite, and engineered surfaces to global architectural projects.
                  </p>

                  <div className="bg-[#FAF9F6] border-l-4 border-[#D4AF37] p-4 rounded-r-lg italic text-[#1C1C21] font-cormorant text-base">
                    “ Led by our founder, Naresh Dhuwadiya, Pyros Stones has grown with a clear vision—to build a company recognized not only for premium-quality stone but also for integrity, consistency, and long-term partnerships. ”
                  </div>

                  <p>
                    With over 15 years of industry leadership, our dedicated team oversees every step of the export supply chain—from raw block selection at premier Rajasthan and South Indian quarries to high-precision Italian slab calibration, 95+ gloss polishing, ISPM-15 compliant fumigated wooden crate packaging, and seamless container loading across Mundra, Kandla, and Nhava Sheva ports.
                  </p>

                  <h4 className="font-outfit text-sm font-bold text-[#1C1C21] pt-2">Our Key Guarantees:</h4>
                  <ul className="space-y-2 list-disc list-inside text-neutral-700 font-normal">
                    <li><strong className="text-[#1C1C21]">15+ Years Export Excellence:</strong> Trusted by architects & distributors in 50+ countries.</li>
                    <li><strong className="text-[#1C1C21]">100% Fumigated Packaging:</strong> ISPM-15 standard wooden crates with plastic film wrap and steel strapping.</li>
                    <li><strong className="text-[#1C1C21]">Precision Calibration:</strong> ±1mm thickness tolerance using Italian gang-saw technology.</li>
                    <li><strong className="text-[#1C1C21]">APEDA & Customs Clearance:</strong> Fast track shipping handling and full export documentation.</li>
                  </ul>
                </div>

                <div className="border-t border-[#EADCC9] pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-[11px] text-[#8E8E93] font-mono">Naresh Dhuwadiya · Founder & MD</span>
                  <button
                    onClick={() => {
                      setShowStoryModal(false);
                      if (window.openEnquiryModal) {
                        window.openEnquiryModal();
                      } else {
                        window.location.hash = '#/contact';
                      }
                    }}
                    className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-md w-full sm:w-auto"
                  >
                    Connect With Leadership
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Mission & Vision Section */}
        <div className="mb-28 reveal reveal-slide-up">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-2">
              OUR CORE PURPOSE &amp; FUTURE DIRECTION
            </span>
            <h2 className="font-cormorant text-3xl sm:text-5xl font-medium text-[#1C1C21]">
              Mission &amp; Vision – India's Leading Marble &amp; Granite Exporter
            </h2>
            <div className="w-20 h-0.5 bg-[#D4AF37] mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            {/* Our Mission Card */}
            <div className="bg-white border border-[#EADCC9] rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group flex flex-col justify-between">
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#1C1C21] text-[#D4AF37] flex items-center justify-center shadow-md border border-[#D4AF37]/30 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                    <Target className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] font-bold uppercase block">OUR MISSION</span>
                    <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-[#1C1C21]">Crafting Precision &amp; Trust</h3>
                  </div>
                </div>

                <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light mb-6 border-b border-[#EADCC9]/60 pb-6 relative z-10">
                  To source, process, and export India's finest natural marble, granite, quartz, and architectural surfaces to international developers and architects—ensuring uncompromised Italian-grade precision, transparent pricing, and 100% reliable export fulfillment.
                </p>
              </div>

              <div className="space-y-4 font-inter text-xs text-[#4E4E59] relative z-10">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F6] border border-[#EADCC9]/40">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#1C1C21] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <strong className="text-[#1C1C21] font-semibold block mb-0.5">Quarry-Direct Excellence</strong>
                    <span>Hand-picked premium blocks directly sourced from Rajasthan &amp; South Indian quarries.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F6] border border-[#EADCC9]/40">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#1C1C21] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <strong className="text-[#1C1C21] font-semibold block mb-0.5">Italian Cutting &amp; Polish Standard</strong>
                    <span>±1mm gangsaw thickness calibration and 95+ gloss luster polish rating.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FAF9F6] border border-[#EADCC9]/40">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#1C1C21] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <strong className="text-[#1C1C21] font-semibold block mb-0.5">Global Export Compliance</strong>
                    <span>ISPM-15 fumigated wooden crating, SASO/SABER certification, and port clearance speed.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Vision Card */}
            <div className="bg-[#1C1C21] text-white border border-neutral-800 rounded-2xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group flex flex-col justify-between">
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#D4AF37]/25 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#D4AF37] text-black flex items-center justify-center shadow-md border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <Eye className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] font-bold uppercase block">OUR VISION</span>
                    <h3 className="font-cormorant text-2xl sm:text-3xl font-bold text-white">Global Industry Leadership</h3>
                  </div>
                </div>

                <p className="font-inter text-sm text-neutral-300 leading-relaxed font-light mb-6 border-b border-white/10 pb-6 relative z-10">
                  To establish Pyros Stones as the world's most trusted partner for natural &amp; engineered stone solutions—pioneering surface innovation, sustainable quarrying practices, and establishing India as the global capital for luxury stone craftsmanship.
                </p>
              </div>

              <div className="space-y-4 font-inter text-xs text-neutral-300 relative z-10">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <strong className="text-white font-semibold block mb-0.5">50+ Global Destinations</strong>
                    <span>Expanding export corridors across North America, Europe, Saudi Arabia, UAE &amp; Asia.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <strong className="text-white font-semibold block mb-0.5">Architectural Innovation</strong>
                    <span>Continuous development of book-matched marble slabs, ultra-thin veneers, and rare quartz.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <strong className="text-white font-semibold block mb-0.5">Sustainable Stewardship</strong>
                    <span>Zero-water waste processing, responsible quarrying, and carbon-reduced logistics.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars values grid */}
        <div className="border-t border-[#E5E7EB] pt-16 mb-28">
          <h3 className="font-outfit text-center text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold mb-12 reveal reveal-slide-up">
            Our Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-white border border-[#E5E7EB] p-6 rounded-xl space-y-3 shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-300 reveal reveal-slide-up"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center font-mono text-xs font-bold">
                  {p.step}
                </div>
                <h4 className="font-outfit text-base font-bold text-[#1C1C21]">{p.title}</h4>
                <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final brand slogan block */}
        <div className="bg-[#1C1C21] rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden border border-neutral-900 shadow-2xl reveal reveal-scale-up mb-12">
          {/* Ambient vector highlights */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-[#D4AF37]/5 filter blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-[#D4AF37]/5 filter blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 text-[#D4AF37] font-bold font-mono text-[9px] tracking-widest uppercase rounded">
              <Globe className="w-3.5 h-3.5 text-[#D4AF37]" /> GLOBAL SUPPLY REACH &amp; EXPORT FULFILLMENT
            </span>
            <h3 className="font-cormorant text-2xl sm:text-4xl font-bold tracking-wide">
              India's Trusted Natural Stone Exporter for Global Projects
            </h3>
            <p className="font-inter text-sm text-neutral-300 leading-relaxed font-light">
              Today, Pyros Stones proudly represents the craftsmanship, precision engineering, and rich quarry heritage of India's stone industry on the international stage. As a leading Marble Exporter from India and Granite Supplier India, our vision is to be the world's most trusted partner for natural marble slabs, granite, quartzite, and engineered surfaces—consistently delivering excellence in quality, custom size fabrication, and 100% reliable export shipping.
            </p>
            <p className="font-cormorant text-base italic text-[#D4AF37] border-t border-white/10 pt-6">
              “ Every natural stone slab we deliver is more than a product—it is the foundation of enduring global architecture and timeless interior design. ”
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  if (window.openEnquiryModal) {
                    window.openEnquiryModal();
                  } else {
                    window.location.hash = '#/contact';
                  }
                }}
                className="px-6 py-3.5 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs font-bold uppercase tracking-widest rounded-xl transition-all shadow-lg"
              >
                CONNECT WITH OUR TEAM
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
