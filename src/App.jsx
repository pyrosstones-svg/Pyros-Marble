import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';
import WorldMap from './components/WorldMap';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import CallToAction from './components/CallToAction';
import PortsShowcase from './components/PortsShowcase';
import EnquiryModal from './components/EnquiryModal';
import InteractiveCollection from './components/InteractiveCollection';
import MarblePage from './components/MarblePage';
import GranitePage from './components/GranitePage';
import QuartzitePage from './components/QuartzitePage';
import SandstonePage from './components/SandstonePage';
import SlatePage from './components/SlatePage';
import LimestonePage from './components/LimestonePage';
import WallCladdingPage from './components/WallCladdingPage';
import PorcelainPage from './components/PorcelainPage';
import USAExportPage from './components/USAExportPage';
import EuropeExportPage from './components/EuropeExportPage';
import AustraliaExportPage from './components/AustraliaExportPage';
import UAEExportPage from './components/UAEExportPage';
import SaudiExportPage from './components/SaudiExportPage';
import { stones } from './data/stoneData';
import { ArrowUp, Ship, Heart, Shield, Globe, Award, CheckCircle, Package, ArrowRight, Layers, Mountain, Hammer, Sparkles, Search, Quote, Star, ChevronLeft, ChevronRight, Instagram, Facebook, Linkedin, Calendar, Clock, Target, Eye } from 'lucide-react';

// Premium Animated Counter Component
function AnimatedCounter({ value, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = React.useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    if (start === end) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

// Intersection Observer based progress bar component
function ProgressBar({ label, percentage }) {
  const [width, setWidth] = useState(0);
  const ref = React.useRef(null);

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
    <div ref={ref} className="space-y-2 text-left">
      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-[#1C1C21]">
        <span>{label}</span>
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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // home, about-us, catalog, contact, product
  const [catalogCategory, setCatalogCategory] = useState('all');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryProduct, setEnquiryProduct] = useState('');
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);

  useEffect(() => {
    window.openEnquiryModal = (productName = '') => {
      setEnquiryProduct(productName);
      setIsEnquiryOpen(true);
    };
    return () => {
      delete window.openEnquiryModal;
    };
  }, []);

  // Scroll Reveal Observer Effect (IntersectionObserver + MutationObserver for React dynamic DOM changes)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // slightly offset to trigger just before coming fully into view
      threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    // Initial query scan
    const scanAndObserve = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        observer.observe(el);
        // If element is already inside viewport on load, activate immediately
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          el.classList.add('reveal-active');
        }
      });
    };

    scanAndObserve();

    // Set a small delay scan to catch delayed React updates
    const timer = setTimeout(scanAndObserve, 200);

    // Mutation Observer to auto-detect any newly injected React components/elements with .reveal class
    const mutationObserver = new MutationObserver(() => {
      scanAndObserve();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [currentPage]);

  // Dynamic Hash Route Parser
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#/';

      if (hash.startsWith('#/product/')) {
        const id = hash.replace('#/product/', '');
        setSelectedProductId(id);
        setCurrentPage('product');
      } else if (hash === '#/about-us' || hash === '#about-us') {
        setCurrentPage('about-us');
      } else if (hash === '#/marble' || hash === '#/catalog/marble') {
        setCurrentPage('marble');
      } else if (hash === '#/granite' || hash === '#/catalog/granite') {
        setCurrentPage('granite');
      } else if (hash === '#/quartzite' || hash === '#/catalog/quartzite') {
        setCurrentPage('quartzite');
      } else if (hash === '#/sandstone' || hash === '#/catalog/sandstone') {
        setCurrentPage('sandstone');
      } else if (hash === '#/slate' || hash === '#/catalog/slate') {
        setCurrentPage('slate');
      } else if (hash === '#/limestone' || hash === '#/catalog/limestone') {
        setCurrentPage('limestone');
      } else if (hash === '#/wall-cladding' || hash === '#/catalog/wall-cladding') {
        setCurrentPage('wall-cladding');
      } else if (hash === '#/porcelain' || hash === '#/catalog/porcelain') {
        setCurrentPage('porcelain');
      } else if (hash === '#/export/usa' || hash === '#/usa' || hash === '#usa') {
        setCurrentPage('export-usa');
      } else if (hash === '#/export/europe' || hash === '#/europe' || hash === '#europe') {
        setCurrentPage('export-europe');
      } else if (hash === '#/export/australia' || hash === '#/australia' || hash === '#australia') {
        setCurrentPage('export-australia');
      } else if (hash === '#/export/uae' || hash === '#/uae' || hash === '#uae') {
        setCurrentPage('export-uae');
      } else if (hash === '#/export/saudi' || hash === '#/saudi' || hash === '#saudi' || hash === '#/saudi-trade') {
        setCurrentPage('export-saudi');
      } else if (hash.startsWith('#/catalog') || hash.startsWith('#catalog')) {
        const cleanHash = hash.replace(/^#\/?/, '');
        const parts = cleanHash.split('/');
        const cat = (parts.length > 1 && parts[1] && parts[1] !== 'all') ? parts[1] : 'marble';
        setCurrentPage(cat);
      } else if (hash === '#/blog' || hash === '#blog') {
        setCurrentPage('blog');
      } else if (hash === '#/contact' || hash === '#contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // parse initial hash load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (pageId) => {
    if (pageId === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${pageId}`;
    }
  };

  const handleSelectForCalculator = (stone) => {
    window.location.hash = `#/product/${stone.id}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Featured Stones on Homepage
  const featuredStones = stones.filter(s =>
    s.id === 'maharaja-white-north' || s.id === 'absolute-black-south' || s.id === 'titanium-gold'
  );

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1C1C21] font-inter selection:bg-[#D4AF37] selection:text-black flex flex-col justify-between overflow-x-hidden">

      {/* Dynamic Header */}
      <Header
        activeSection={currentPage === 'home' ? 'hero' : currentPage}
        setActiveSection={(id) => navigateTo(id === 'hero' ? 'home' : id)}
      />

      {/* Dynamic Page Views */}
      <main className={`flex-grow ${currentPage === 'home' ? '' : 'pt-16'}`}>
        {currentPage === 'home' && (
          <>
            <Hero onExploreClick={navigateTo} />

            {/* Premium Stats Banner */}
            <div className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 w-full reveal reveal-slide-up delay-300">
              <div className="bg-[#1C1C21]/95 backdrop-blur-md border border-[#D4AF37]/35 rounded-xl sm:rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-[#D4AF37]/65 transition-all duration-500 p-5 sm:p-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:divide-x lg:divide-white/10">

                  {/* Stat 1: Heritage */}
                  <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 group hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 group-hover:scale-110 transition-all duration-300">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-outfit text-lg sm:text-2xl font-bold text-white tracking-tight">
                        <AnimatedCounter value="10" suffix="+" /> Yrs
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-semibold mt-0.5">
                        Heritage
                      </div>
                    </div>
                  </div>

                  {/* Stat 2: Secure Cargo */}
                  <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 group hover:translate-y-[-2px] transition-transform duration-300 lg:pl-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 group-hover:scale-110 transition-all duration-300">
                      <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-outfit text-lg sm:text-2xl font-bold text-white tracking-tight">
                        <AnimatedCounter value="100" suffix="%" />
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-semibold mt-0.5">
                        Secure Cargo
                      </div>
                    </div>
                  </div>

                  {/* Stat 3: Gloss Luster */}
                  <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 group hover:translate-y-[-2px] transition-transform duration-300 lg:pl-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 group-hover:scale-110 transition-all duration-300">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-outfit text-lg sm:text-2xl font-bold text-white tracking-tight">
                        <AnimatedCounter value="95" suffix="+" />
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-semibold mt-0.5">
                        Gloss Luster
                      </div>
                    </div>
                  </div>

                  {/* Stat 4: SGS Certified */}
                  <div className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4 group hover:translate-y-[-2px] transition-transform duration-300 lg:pl-8">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/20 group-hover:scale-110 transition-all duration-300">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <div className="font-outfit text-lg sm:text-2xl font-bold text-[#D4AF37] tracking-tight">
                        SGS
                      </div>
                      <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-semibold mt-0.5">
                        Certified
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* SECTION 1: Brief About Us (Tilux Style Overlapping Images & Progress Bars) */}
            <section className="py-24 bg-[#F5EFEB] border-t border-b border-[#EADCC9] overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                {/* Overlapping Images (Left) */}
                <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-start reveal reveal-slide-left">
                  <div className="w-[85%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[#EADCC9] bg-neutral-100">
                    <img
                      src="/about_us_yard.png"
                      alt="Udaipur Processing Yard"
                      onError={(e) => {
                        e.target.src = "/PyrosStones_logoV0004.png";
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-[-8%] right-0 w-[55%] aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-neutral-100">
                    <img
                      src="/about_us_factory_saw.png"
                      alt="Calibrated Marble Blocks"
                      onError={(e) => {
                        e.target.src = "/about-us-factory.jpg";
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Rotating Circular Badge */}
                  <div className="absolute top-[40%] left-[-10%] w-28 h-28 z-20 select-none hidden sm:block">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                        <defs>
                          <path id="circlePathAbout" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                        </defs>
                        <text className="text-[7.5px] fill-[#D4AF37] font-bold tracking-[0.22em] uppercase font-mono">
                          <textPath xlinkHref="#circlePathAbout">
                            PYROS EXPORTS · LUXURY STONES ·
                          </textPath>
                        </text>
                      </svg>
                      <div
                        onClick={() => navigateTo('about-us')}
                        className="absolute w-12 h-12 bg-[#D4AF37] text-black rounded-full flex items-center justify-center shadow-lg border border-white/20 cursor-pointer hover:bg-black hover:text-[#D4AF37] transition-all duration-300"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Content & Progress Bars (Right) */}
                <div className="lg:col-span-7 space-y-8 text-left reveal reveal-slide-right delay-200">
                  <div className="space-y-4">
                    <span className="font-outfit text-xs tracking-widest text-[#D4AF37] uppercase font-bold block">
                      INDIA'S TRUSTED NATURAL STONE EXPORTER
                    </span>
                    <h2 className="font-cormorant text-3xl sm:text-5xl font-medium text-[#1C1C21] leading-tight">
                      Precision Crafted <br />
                      <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#1C1C21] via-[#333333] to-[#D4AF37]">
                        Marble & Granite
                      </span> <br />
                      for Global Projects
                    </h2>
                    <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">
                      Pyros is a leading <strong className="text-[#1C1C21] font-semibold">Marble Exporter from India</strong>, trusted by architects, importers, wholesalers, and construction companies worldwide for premium natural stone solutions. As an experienced <strong className="text-[#1C1C21] font-semibold">Granite Exporter from India</strong> and <strong className="text-[#1C1C21] font-semibold">Indian Marble Exporter</strong>, we source high-quality marble and granite directly from India's finest quarries and process every slab using advanced Italian technology to deliver exceptional precision, strength, and surface finish.
                    </p>
                    <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">
                      From quarry selection and precision calibration to mirror polishing, quality inspection, and secure export packaging, every product is manufactured to meet international standards. Whether you need a reliable <strong className="text-[#1C1C21] font-semibold">Marble Slabs Exporter</strong>, <strong className="text-[#1C1C21] font-semibold">Granite Slabs Supplier</strong>, <strong className="text-[#1C1C21] font-semibold">Marble Tiles Exporter</strong>, or <strong className="text-[#1C1C21] font-semibold">Granite Tiles Exporter</strong>, Pyros delivers consistent quality with safe worldwide shipping, making us a preferred <strong className="text-[#1C1C21] font-semibold">Natural Stone Exporter India</strong> for residential, commercial, hospitality, and luxury infrastructure projects.
                    </p>
                    
                    {/* Key Feature Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3 bg-white/70 border border-[#EADCC9] rounded-lg">
                        <span className="font-outfit text-xs font-bold text-[#1C1C21] block">20mm & 30mm</span>
                        <span className="font-inter text-[11px] text-[#8E8E93]">Precision Calibrated Marble & Granite Slabs</span>
                      </div>
                      <div className="p-3 bg-white/70 border border-[#EADCC9] rounded-lg">
                        <span className="font-outfit text-xs font-bold text-[#1C1C21] block">Export Packaging</span>
                        <span className="font-inter text-[11px] text-[#8E8E93]">ISPM-15 Certified Wooden Crates</span>
                      </div>
                      <div className="p-3 bg-white/70 border border-[#EADCC9] rounded-lg">
                        <span className="font-outfit text-xs font-bold text-[#1C1C21] block">Worldwide Shipping</span>
                        <span className="font-inter text-[11px] text-[#8E8E93]">Fast Global Container Export Solutions</span>
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Progress Bars */}
                  <div className="space-y-5 border-y border-[#EADCC9] py-6">
                    <ProgressBar label="ITALIAN PRECISION CUTTING & CALIBRATION" percentage={99} />
                    <ProgressBar label="HIGH GLOSS SURFACE FINISH (95+ GLOSS)" percentage={98} />
                    <ProgressBar label="EXPORT LOGISTICS & ON-TIME DELIVERY" percentage={100} />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => navigateTo('about-us')}
                      className="px-6 py-3.5 bg-transparent border border-[#D4AF37]/50 text-[#1C1C21] hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-xs tracking-wider uppercase font-semibold rounded transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                    >
                      EXPLORE OUR COMPANY →
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* SECTION 3: Rebuilt Featured Collections (Vibrant Tilux-style Grid) */}
            <section className="py-24 bg-[#FFFFFF] border-b border-[#EADCC9] overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-16 max-w-3xl mx-auto reveal reveal-slide-up">
                  <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">
                    Natural Stone Collections
                  </span>
                  <h2 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#1C1C21]">
                    Export Quality Marble & Granite Slabs
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                  {[
                    {
                      id: 'catalog/quartzite',
                      title: 'Quartz & Quartzite',
                      desc: 'Engineered Calacatta & natural Taj Mahal quartzite slabs with high hardness & zero porosity.',
                      image: '/quartz_quartzite_collection.png',
                    },
                    {
                      id: 'catalog/sandstone',
                      title: 'Sandstone & Slate',
                      desc: 'Teakwood sandstone & Kota blue slate for rustic exterior architectural facades & pool decks.',
                      image: '/sandstone_slate_collection.png',
                    }
                  ].map((col, idx) => (
                    <div
                      key={col.id}
                      onClick={() => navigateTo(col.id)}
                      className={`group cursor-pointer relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl border border-[#EADCC9]/60 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 reveal reveal-slide-up delay-${(idx + 1) * 100}`}
                    >
                      {/* Full-height backdrop image */}
                      <img
                        src={col.image}
                        alt={col.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                        onError={(e) => { e.target.src = '/logo.jpeg'; }}
                      />

                      {/* Gradient Overlay for high-contrast legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C21]/95 via-[#1C1C21]/45 to-transparent z-10 transition-colors duration-300" />

                      {/* Text content overlay positioned absolute at the bottom */}
                      <div className="absolute inset-0 p-6 z-20 flex flex-col justify-end text-left select-none">
                        <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold mb-1">
                          Collection
                        </span>
                        <h3 className="font-cormorant text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                          {col.title}
                        </h3>
                        <p className="font-inter text-xs text-white/70 leading-relaxed font-light mt-2 max-h-0 opacity-0 group-hover:max-h-[60px] group-hover:opacity-100 overflow-hidden transition-all duration-500">
                          {col.desc}
                        </p>

                        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[9px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                          <span>Browse Collection</span>
                          <div className="w-7 h-7 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Free Quote Button CTA */}
                <div className="mt-12 text-center reveal reveal-slide-up">
                  <button
                    onClick={() => {
                      if (window.openEnquiryModal) {
                        window.openEnquiryModal();
                      } else {
                        navigateTo('contact');
                      }
                    }}
                    className="inline-flex px-8 py-4 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-lg items-center gap-2"
                  >
                    Get Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </section>

            {/* SECTION 2: Why Choose Pyros — SEO-Optimized B2B Export Section */}
            <section className="py-24 bg-[#FAF9F6] overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">

                {/* Title split row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 border-b border-[#EADCC9] pb-8 reveal reveal-slide-up">
                  <div className="lg:col-span-6">
                    <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">Why Choose Pyros</span>
                    <h2 className="font-cormorant text-3xl sm:text-4xl font-medium text-[#1C1C21] leading-tight">
                      India's Trusted Marble Exporter &amp;<br className="hidden sm:block" /> Granite Supplier for Global Projects
                    </h2>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">
                      As a leading Marble Exporter from India and Granite Manufacturer India, Pyros combines premium Indian stone, advanced Italian processing technology, and strict international quality standards to deliver exceptional marble slabs, granite slabs, and natural stone solutions trusted by architects, importers, wholesalers, and developers across the globe.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                  {/* Left Column (Desktop): Quote, Numbers & Target Markets (7 Columns) - Stacks top on mobile */}
                  <div className="lg:col-span-7 space-y-8 text-left reveal reveal-slide-right delay-200 order-1 lg:order-1">

                    {/* Quote Widget */}
                    <div className="bg-[#F5EFEB] border border-[#EADCC9] p-6 rounded-2xl relative shadow-md">
                      <div className="absolute -top-3 left-6">
                        <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-lg">
                          <Quote className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                      <p className="font-cormorant text-lg italic text-[#1C1C21] leading-relaxed mt-2">
                        "We don't just export natural stone—we deliver precision-crafted marble and granite solutions engineered to meet international standards. Every slab reflects our commitment to quality, consistency, and long-term partnerships with global buyers."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <span className="w-6 h-0.5 bg-[#D4AF37]" />
                        <span className="font-outfit text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold">— Pyros Export Operations Team</span>
                      </div>
                    </div>

                    {/* Global Presence stats */}
                    <div className="flex items-center gap-6">
                      <div className="font-outfit text-5xl font-bold text-[#D4AF37] tracking-tight">
                        <AnimatedCounter value={100} suffix="+" />
                      </div>
                      <div>
                        <h4 className="font-outfit text-sm font-bold text-[#1C1C21] uppercase tracking-wider">Global Export Destinations</h4>
                        <p className="font-inter text-xs text-[#4E4E59] leading-relaxed font-light mt-0.5 max-w-sm">
                          Supplying premium marble, granite, and natural stone products to distributors, contractors, architects, and project developers across more than 100 international markets with reliable logistics and on-time container deliveries.
                        </p>
                      </div>
                    </div>

                    {/* Export Markets Badging — Saudi Arabia & UAE first for SEO geo-signals */}
                    <div className="bg-white border border-[#EADCC9] p-6 rounded-2xl space-y-4 shadow-sm">
                      <div className="font-outfit text-xs font-bold text-[#1C1C21] uppercase tracking-wider">
                        Active Export Markets
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {['Saudi Arabia', 'United Arab Emirates', 'United States', 'United Kingdom', 'Qatar', 'Kuwait', 'Oman', 'Europe', 'Australia'].map((market, idx) => (
                          <div
                            key={idx}
                            className={`px-3.5 py-2 border text-[10px] uppercase font-bold tracking-widest rounded-lg transition-all shadow-sm cursor-default ${
                              idx < 2
                                ? 'bg-[#D4AF37]/10 border-[#D4AF37]/40 text-[#1C1C21] hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]'
                                : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-[#D4AF37] hover:bg-white hover:text-black'
                            }`}
                          >
                            {market}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column (Desktop): Photo with Floating Customer Badge (5 Columns) - Stacks bottom on mobile */}
                  <div className="lg:col-span-5 relative reveal reveal-slide-left order-2 lg:order-2">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#EADCC9] aspect-[4/5] bg-neutral-100">
                      <img
                        src="/why_choose_us_slabs.png"
                        alt="Premium Indian Marble and Granite Slabs for Export — Pyros Marble"
                        onError={(e) => {
                          e.target.src = "/premium_photo-1661963559074-9655a9404f1a.avif";
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating Customers Badge */}
                    <div className="absolute bottom-6 left-6 right-6 bg-[#1C1C21]/95 backdrop-blur-md border border-white/10 rounded-xl p-5 shadow-2xl text-left">
                      <div className="flex -space-x-2.5 mb-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full border border-white/20 bg-neutral-800 flex items-center justify-center text-[9px] font-bold font-mono text-[#D4AF37] shadow-md">
                            C{i}
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full border border-[#D4AF37] bg-[#D4AF37] text-black flex items-center justify-center text-[9px] font-bold shadow-md">
                          100+
                        </div>
                      </div>
                      <p className="text-xs text-white/90 leading-normal font-light">
                        Trusted by <strong className="text-[#D4AF37]">2,000+ Architects, Importers &amp; Stone Buyers Worldwide</strong>
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* NEW SECTION: Primary Departure Ports (PDF Specs matching) */}
            <section className="py-24 bg-[#FAF4EC] border-b border-[#EADCC9] overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">

                {/* Heading (Aligned matching Screenshot 2-Column Layout) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 border-b border-[#EADCC9] pb-8 text-left reveal reveal-slide-up">
                  <div className="lg:col-span-6">
                    <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">INDIA'S GLOBAL EXPORT GATEWAYS</span>
                    <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1C1C21] leading-tight">
                      Direct Container Shipping<br className="hidden sm:block" />
                      for Marble &amp; Granite<br className="hidden sm:block" />
                      via Mundra &amp; Chennai Ports
                    </h2>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">
                      As a trusted Marble Exporter from India and Granite Exporter from India, Pyros delivers premium natural stone through India's largest international ports. Our streamlined export operations ensure secure container loading, faster transit, complete documentation, and reliable worldwide delivery for architects, importers, wholesalers, distributors, and construction projects across Saudi Arabia, UAE, Europe, the USA, and beyond.
                    </p>
                  </div>
                </div>

                {/* Ports Showcase Tabs and filtered grids */}
                <div className="reveal reveal-slide-up delay-200">
                  <PortsShowcase />
                </div>

              </div>
            </section>

            {/* NEW SECTION: Interactive Manufacturing Process */}
            <section className="py-24 bg-[#FAF9F6] border-b border-[#EADCC9] overflow-hidden text-left">
              <div className="max-w-7xl mx-auto px-6">

                {/* Header (2-Column Split Row matching brand alignment style) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 border-b border-[#EADCC9] pb-8 reveal reveal-slide-up">
                  <div className="lg:col-span-6">
                    <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">
                      WORLD-CLASS MANUFACTURING PROCESS
                    </span>
                    <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-[40px] font-medium text-[#1C1C21] leading-tight">
                      Precision Manufacturing for Premium Marble &amp; Granite Export
                    </h2>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">
                      Pyros follows a world-class manufacturing process designed to deliver premium natural stone for global markets. As a leading Marble Exporter from India, Granite Exporter from India, and trusted Natural Stone Exporter India, every slab is produced using advanced Italian machinery, strict quality control, and precision engineering. From quarry selection to export-ready packaging, each stage ensures exceptional strength, accurate dimensions, superior surface finish, and long-lasting durability for residential, commercial, hospitality, and luxury architectural projects worldwide.
                    </p>
                  </div>
                </div>

                {/* Slider Header Control for Mobile/Tablet */}
                <div className="flex justify-between items-center mb-6 lg:hidden">
                  <span className="font-outfit text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                    5 Stage Process Journey
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        document.getElementById('processing-journey-scroll')?.scrollBy({ left: -280, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                      aria-label="Previous step"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        document.getElementById('processing-journey-scroll')?.scrollBy({ left: 280, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 rounded-full border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                      aria-label="Next step"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* 5-Column horizontal responsive timeline */}
                <div
                  id="processing-journey-scroll"
                  className="flex lg:grid lg:grid-cols-5 overflow-x-auto no-scrollbar gap-6 pb-6 lg:pb-0 snap-x snap-mandatory scroll-smooth w-full"
                >
                  {[
                    {
                      step: 'STEP 01',
                      num: '01',
                      title: 'PREMIUM BLOCK SELECTION',
                      desc: "We source premium marble and granite blocks directly from India's most trusted quarries, carefully selecting each block for its natural beauty, colour consistency, structural strength, and long-term performance.",
                      image: '/block_sourcing.png'
                    },
                    {
                      step: 'STEP 02',
                      num: '02',
                      title: 'ITALIAN PRECISION CUTTING',
                      desc: 'Using fully automated Italian gang saws and bridge-cutting technology, every block is transformed into accurately calibrated slabs with precise thickness, clean edges, and consistent dimensions.',
                      image: '/calibrated_slicing.png'
                    },
                    {
                      step: 'STEP 03',
                      num: '03',
                      title: 'RESIN TREATMENT & STRUCTURAL STRENGTHENING',
                      desc: "Advanced vacuum resin technology strengthens each slab, reduces natural pores, enhances durability, and preserves the stone's original texture and elegant veining.",
                      image: '/vacuum_curing.png'
                    },
                    {
                      step: 'STEP 04',
                      num: '04',
                      title: 'GLOSS METER READING',
                      desc: 'Every marble and granite slab undergoes comprehensive quality checks, including precision gloss meter reflectivity testing, thickness calibration, dimensional accuracy, colour consistency, and surface finish inspection to meet international export standards.',
                      image: '/ai_marble_laser_scan.png'
                    },
                    {
                      step: 'STEP 05',
                      num: '05',
                      title: 'EXPORT PACKAGING & WORLDWIDE SHIPPING',
                      desc: 'Finished slabs are securely packed in ISPM-15 certified wooden crates with reinforced protection for safe international transportation. Our efficient logistics network ensures reliable deliveries to Saudi Arabia, UAE, Qatar, Kuwait, Europe, the USA, Australia, and over 100 countries worldwide.',
                      image: '/secure_lashing.png'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="card-3d shrink-0 snap-center min-w-[260px] sm:min-w-[280px] lg:min-w-0 w-[78vw] lg:w-full h-auto lg:h-[480px]">
                      <div
                        className="card-3d-inner bg-white border border-[#EADCC9] p-6 rounded-2xl flex flex-col justify-between h-full shadow-sm hover:border-[#D4AF37]/50 hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="text-left">
                          <span className="font-outfit text-[11px] font-bold text-[#D4AF37] tracking-widest uppercase block mb-1">
                            {item.step}
                          </span>
                          <div className="w-8 h-0.5 bg-[#D4AF37]/30 group-hover:w-16 transition-all duration-500 my-2" />
                          <h3 className="font-outfit text-xs sm:text-sm font-bold text-[#1C1C21] mt-2 uppercase tracking-wider block leading-snug">
                            {item.title}
                          </h3>
                          <p className="font-inter text-xs text-[#4E4E59] leading-relaxed font-normal mt-2.5 block">
                            {item.desc}
                          </p>
                        </div>

                        <div className="w-full aspect-[2/1] rounded-lg overflow-hidden border border-neutral-100 bg-neutral-100 mt-4 shadow-inner shrink-0">
                          <img
                            src={item.image}
                            alt={item.title}
                            onError={(e) => {
                              if (item.num === '01') {
                                e.target.src = '/logo.jpeg';
                              } else if (item.num === '02') {
                                e.target.src = '/about-us-factory.jpg';
                              } else if (item.num === '03') {
                                e.target.src = 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=600&auto=format&fit=crop';
                              } else if (item.num === '04') {
                                e.target.src = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop';
                              } else if (item.num === '05') {
                                e.target.src = '/logo.jpeg';
                              }
                            }}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* SECTION 4: Our Products & Partner Logo Slider */}
            <section className="py-24 bg-[#FAF6F0] border-b border-[#EADCC9] overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16 max-w-3xl mx-auto reveal reveal-slide-up">
                  <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">PREMIUM INDIAN NATURAL STONE COLLECTION</span>
                  <h2 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#1C1C21]">Timeless Marble Slabs, Granite &amp; Engineered Quartz Designs</h2>
                  <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light mt-4">
                    As a premier Marble Exporter from India and trusted Granite Supplier India, Pyros presents an exclusive portfolio of gangsaw-calibrated natural stone slabs, carved wall panels, and high-gloss quartz surfaces engineered for architects, commercial developers, and stone importers across Saudi Arabia, UAE, Europe, and the USA.
                  </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  {[
                    {
                      title: 'Décor Carving Glossy Slabs',
                      desc: 'High-luster carved marble & granite surfaces crafted with precision Italian CNC texturing and reflective finish, designed for luxury hotel lobbies, executive feature walls, and architectural facades.',
                      icon: Sparkles
                    },
                    {
                      title: 'Endless Glossy Vein Marble',
                      desc: 'Premium Indian white marble & quartzite featuring continuous book-matched veining patterns and 95+ high-gloss mirror polish for expansive commercial flooring and luxury villa interiors.',
                      icon: Layers
                    },
                    {
                      title: 'Statuario Marble Look Quartz',
                      desc: 'Luxury quartz formulations inspired by classic Italian Statuario marble, offering zero-porosity, high stain resistance, and bold dramatic veining for kitchen countertops & high-traffic commercial spaces.',
                      icon: Award
                    }
                  ].map((prod, idx) => {
                    const Icon = prod.icon;
                    return (
                      <div key={idx} className="card-3d h-full">
                        <div
                          className="card-3d-inner bg-[#D4AF37] border border-[#b59228] p-8 rounded-2xl flex flex-col justify-between h-full shadow-lg group"
                        >
                          <div className="space-y-4 text-left">
                            <div className="w-12 h-12 rounded-xl bg-[#1C1C21] text-[#D4AF37] flex items-center justify-center translate-3d-icon">
                              <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-outfit text-lg font-bold text-[#1C1C21] translate-3d-title">{prod.title}</h3>
                            <p className="font-inter text-xs text-[#1C1C21]/90 leading-relaxed font-medium translate-3d-desc">{prod.desc}</p>
                          </div>
                          <div className="mt-8 pt-4 border-t border-[#1C1C21]/15 text-left">
                            <button
                              onClick={() => navigateTo('catalog')}
                              className="text-xs font-bold uppercase tracking-wider text-[#1C1C21] hover:text-black transition-colors flex items-center gap-2"
                            >
                              VIEW PRODUCTS
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Looping Partner Marquee Slider */}
                <div className="pt-12 text-center reveal reveal-slide-up">

                  {/* Full-Width Marquee Strip (Patti BG) */}
                  <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden py-6 bg-[#1C1C21] border-y border-[#D4AF37]/25 shadow-xl">
                    <div className="flex gap-16 items-center animate-marquee whitespace-nowrap min-w-max justify-around">
                      {/* Repeat twice for seamless loop */}
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 items-center">
                          {['SGS CERTIFIED', 'ISO 9001:2015', 'APEDA MEMBER', 'CAPEXIL EXPORTER', 'GST REGISTERED', 'IEC COMPLIANT'].map((logo, idx) => (
                            <span
                              key={idx}
                              className="font-outfit text-xs font-bold tracking-[0.25em] text-white/90 hover:text-[#D4AF37] cursor-default transition-colors uppercase flex items-center gap-2"
                            >
                              <span className="text-[#D4AF37] font-sans">✦</span> {logo}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </section>

            {/* SECTION 5: Core Features & Expandable Accordion (Tilux-style qualities) */}
            <section className="py-24 bg-[#FFFFFF] border-b border-[#EADCC9] overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                  {/* Left Side (Desktop): Accordion elements (7 Columns) - Stacks top on mobile */}
                  <div className="lg:col-span-7 space-y-8 text-left reveal reveal-slide-right delay-200 order-1 lg:order-1">
                    <div className="space-y-4">
                      <span className="font-outfit text-xs tracking-widest text-[#D4AF37] uppercase font-bold block">
                        OUR CORE FEATURES &amp; QUALITY STANDARDS
                      </span>
                      <h2 className="font-cormorant text-3xl sm:text-5xl font-medium text-[#1C1C21] leading-tight">
                        Engineered Natural Stone Features Built for Global Architecture
                      </h2>
                      <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light">
                        As a leading Marble Exporter from India and certified Granite Supplier India, Pyros engineers every natural stone slab using advanced Italian gangsaw calibration techniques to deliver exceptional strength, ultra-low water absorption, high scratch resistance, and long-term architectural durability.
                      </p>
                    </div>

                    {/* Interactive Accordion */}
                    <div className="space-y-3">
                      {[
                        {
                          id: 0,
                          title: 'Hygienic & Non-Porous Resin Sealed Slabs',
                          desc: 'Every marble and quartzite slab is reinforced with advanced vacuum epoxy resin treatment that seals natural micro-fissures. This zero-porosity finish prevents moisture absorption, bacterial growth, and chemical staining—making our slabs ideal for luxury kitchen countertops and hotel vanity tops.'
                        },
                        {
                          id: 1,
                          title: 'Scratch, Heat & Acid Resistant Natural Stone',
                          desc: 'Mined from high-density Indian quarries and diamond-polished using Italian abrasive technology, Pyros granites and quartzites achieve superior Mohs hardness levels, remaining resilient against heavy foot traffic, household acids, and thermal impact.'
                        },
                        {
                          id: 2,
                          title: 'Sustainably Mined, APEDA & CAPEXIL Certified Export',
                          desc: 'All raw blocks are ethically extracted from certified quarries under strict APEDA, CAPEXIL, and ISO 9001:2015 compliance. Processed in environmentally audited gangsaw factories in Udaipur with zero child labor, ISPM-15 crate lashing, and 100% legal export clearances.'
                        }
                      ].map((faq) => {
                        const isExpanded = activeFaq === faq.id;
                        return (
                          <div
                            key={faq.id}
                            className="border border-[#EADCC9] rounded-xl overflow-hidden bg-[#FAF9F6] transition-all"
                          >
                            <button
                              onClick={() => setActiveFaq(isExpanded ? null : faq.id)}
                              className="w-full px-6 py-4 flex items-center justify-between text-left font-outfit text-sm font-bold text-[#1C1C21] hover:text-[#D4AF37] transition-colors"
                            >
                              <span>{faq.title}</span>
                              <span className="text-[#D4AF37] font-mono text-base">{isExpanded ? '−' : '+'}</span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[150px] border-t border-[#EADCC9]' : 'max-h-0'
                              }`}>
                              <p className="p-6 text-xs text-[#4E4E59] leading-relaxed font-light bg-white">
                                {faq.desc}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Right Side (Desktop): Photo with Rating Badge (5 Columns) - Stacks bottom on mobile */}
                  <div className="lg:col-span-5 relative reveal reveal-slide-left order-2 lg:order-2">
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#EADCC9] aspect-[4/5] bg-neutral-100">
                      <img
                        src="/core_features_calibration.png"
                        alt="Quality Calibration Inspection"
                        onError={(e) => {
                          e.target.src = "/about-us-factory.jpg";
                        }}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating Rating Badge */}
                    <div className="absolute top-6 left-6 bg-[#D4AF37] text-black rounded-xl p-4 shadow-xl border border-white/20 text-left">
                      <div className="flex items-center gap-1.5 mb-1 text-black">
                        <span className="font-outfit text-xl font-bold">4.9</span>
                        <span className="text-xs font-medium">/ 5</span>
                      </div>
                      <div className="flex items-center gap-0.5 text-black">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <span className="block text-[8px] uppercase tracking-wider font-bold mt-2 opacity-80">
                        Based on 2500 reviews
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* SECTION 4: Global Reach / Interactive World Map */}
            <section className="py-24 bg-[#1C1C21] text-white border-y border-neutral-800 overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-4 space-y-6 reveal reveal-slide-left">
                    <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block">GLOBAL SUPPLY NETWORK</span>
                    <h2 className="font-cormorant text-4xl sm:text-5xl font-medium tracking-wide text-white leading-tight">
                      Direct Cargo Shipments to Saudi Arabia, GCC &amp; Global Ports
                    </h2>
                    <p className="font-inter text-sm text-neutral-300 leading-relaxed font-light">
                      Pyros surfaces are selected by premium luxury builders worldwide. We supply container-load shipments directly from our Udaipur head offices to major sea terminals in the United States, Europe/UK, and the Arab Gulf countries.
                    </p>
                    <p className="font-inter text-xs text-[#D4AF37]/90 leading-relaxed font-light">
                      * Hover or click the gold destination pins on the map to inspect active operations and logistics specifications at each location.
                    </p>
                  </div>
                  <div className="lg:col-span-8 reveal reveal-scale-up delay-200">
                    <WorldMap />
                  </div>
                </div>
              </div>
            </section>



            {/* NEW SECTION: Homepage Blog Highlights */}
            <section className="py-24 bg-[#FFFFFF] border-b border-[#EADCC9] overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex justify-between items-end mb-16 gap-6 reveal reveal-slide-up">
                  <div className="text-left max-w-2xl">
                    <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">Publications</span>
                    <h2 className="font-cormorant text-4xl sm:text-5xl font-medium text-[#1C1C21]">Latest Insights & Stone Bulletins</h2>
                    <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light mt-4 hidden sm:block">
                      Read technical guides regarding calibrated wire saw tolerances, export fumigation guidelines, and design trends.
                    </p>
                  </div>
                  <button
                    onClick={() => navigateTo('blog')}
                    className="flex items-center gap-2 text-xs font-bold text-[#D4AF37] hover:text-[#b59228] uppercase tracking-wider shrink-0 transition-colors pb-1 border-b border-[#D4AF37]/30 hover:border-[#D4AF37]"
                  >
                    Read All Articles
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      id: 'calibrated-marble-tolerance',
                      title: 'How We Process Calibrated White Marble down to ±1mm Tolerance',
                      category: 'Manufacturing',
                      date: 'July 10, 2026',
                      readTime: '5 min read',
                      image: '/calibrated_slicing.png',
                      desc: 'A deep-dive look into the Italian diamond wire sawing technologies and vacuum curing processes that calibrate luxury slabs.'
                    },
                    {
                      id: 'fcl-logistics-fumigation-crates',
                      title: 'FCL Logistics: Guidelines for Stone Export Shipping & ISPM-15 Crating',
                      category: 'Logistics',
                      date: 'June 28, 2026',
                      readTime: '6 min read',
                      image: '/secure_lashing.png',
                      desc: 'Learn the customs bonded protocols, direct shipping port selections, and wood fumigation standards necessary for transit security.'
                    },
                    {
                      id: 'statuario-vs-lilac-marble-design',
                      title: 'Statuario vs Lilac Marble: Aesthetic Decisions in Luxury Interiors',
                      category: 'Design Trends',
                      date: 'May 14, 2026',
                      readTime: '4 min read',
                      image: '/why_choose_us_slabs.png',
                      desc: 'Explore visual contrasts, vein profiles, and layout patterns for choosing marble panel walls in modern premium residences.'
                    }
                  ].map((post, idx) => (
                    <div
                      key={post.id}
                      onClick={() => navigateTo('blog')}
                      className={`group cursor-pointer flex flex-col bg-white border border-[#EADCC9] rounded-2xl overflow-hidden shadow-sm hover:border-[#D4AF37]/50 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 reveal reveal-slide-up delay-${(idx + 1) * 100}`}
                    >
                      <div className="aspect-[4/3] overflow-hidden relative border-b border-neutral-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          onError={(e) => {
                            if (post.id === 'calibrated-marble-tolerance') e.target.src = '/about-us-factory.jpg';
                            else if (post.id === 'fcl-logistics-fumigation-crates') e.target.src = '/logo.jpeg';
                            else e.target.src = '/premium_photo-1661963559074-9655a9404f1a.avif';
                          }}
                        />
                        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#D4AF37] border border-[#EADCC9] text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded z-20">
                          {post.category}
                        </span>
                      </div>
                      <div className="p-6 flex-grow flex flex-col justify-between space-y-4 text-left">
                        <div className="space-y-2">
                          <div className="flex items-center gap-4 text-[10px] text-neutral-400 font-light">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3 text-[#D4AF37]" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-[#D4AF37]" />
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="font-outfit text-sm font-bold text-[#1C1C21] leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="font-inter text-xs text-neutral-500 leading-relaxed font-light line-clamp-2">
                            {post.desc}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-neutral-100/60 flex items-center justify-between text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                          <span>Read Article</span>
                          <div className="w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* SECTION 5: Call to Action homepage block */}
            <CallToAction />
          </>
        )}

        {currentPage === 'about-us' && (
          <AboutUs />
        )}

        {currentPage === 'marble' && <MarblePage />}
        {currentPage === 'granite' && <GranitePage />}
        {currentPage === 'quartzite' && <QuartzitePage />}
        {currentPage === 'sandstone' && <SandstonePage />}
        {currentPage === 'slate' && <SlatePage />}
        {currentPage === 'limestone' && <LimestonePage />}
        {currentPage === 'wall-cladding' && <WallCladdingPage />}
        {currentPage === 'porcelain' && <PorcelainPage />}

        {currentPage === 'export-usa' && <USAExportPage onNavigate={navigateTo} />}
        {currentPage === 'export-europe' && <EuropeExportPage onNavigate={navigateTo} />}
        {currentPage === 'export-australia' && <AustraliaExportPage onNavigate={navigateTo} />}
        {currentPage === 'export-uae' && <UAEExportPage onNavigate={navigateTo} />}
        {currentPage === 'export-saudi' && <SaudiExportPage onNavigate={navigateTo} />}

        {currentPage === 'catalog' && (
          <MarblePage />
        )}

        {currentPage === 'contact' && (
          <Contact />
        )}

        {currentPage === 'blog' && (
          <Blog />
        )}

        {currentPage === 'product' && (
          <ProductDetails
            stoneId={selectedProductId}
            onBack={() => navigateTo('catalog')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#1C1C21] text-neutral-400 border-t border-[#D4AF37]/20 py-20 text-xs leading-relaxed relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-16">

          {/* Col 1: Logo */}
          <div className="flex flex-col gap-4 text-left">
            <div className="h-16 sm:h-20 overflow-hidden flex items-center bg-white/95 rounded-xl px-4 py-2 w-fit border border-[#D4AF37]/40 shadow-xl">
              <img src="/PyrosStones_logoV0004.png" alt="Pyros Stones Logo" className="h-full w-auto object-contain" />
            </div>
            <p className="font-inter font-light text-neutral-100 text-[13px] leading-relaxed mt-2">
              Corporate exporter of premium natural stones, marble & granite gangsaw slabs, and tiles worldwide.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-outfit text-xs tracking-widest uppercase text-white font-bold pb-2 border-b border-white/5">Quick Links</h4>
            <ul className="space-y-2.5 font-light text-neutral-200 text-[13px]">
              {[
                { name: 'Home Showcase', page: 'home' },
                { name: 'Company Biography', page: 'about-us' },
                { name: 'Products Range', page: 'catalog' },
                { name: 'Industry Insights', page: 'blog' },
                { name: 'Get Free Estimate', page: 'contact' }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigateTo(link.page)}
                    className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 text-left block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Collection */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-outfit text-xs tracking-widest uppercase text-white font-bold pb-2 border-b border-white/5">Our Collection</h4>
            <ul className="space-y-2.5 font-light text-neutral-200 text-[13px]">
              {['Marble & Granite', 'Quartz & Quartzite', 'Sandstone & Slate', 'Wall Cladding', 'Porcelain Surfaces'].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => navigateTo('catalog')}
                    className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 text-left block"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Export Destinations (Country Target Pages) */}
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-outfit text-xs tracking-widest uppercase text-white font-bold pb-2 border-b border-white/5 flex items-center gap-2">
              <span className="text-[#D4AF37]">✦</span> Export Countries
            </h4>
            <ul className="space-y-2.5 font-light text-neutral-200 text-[13px]">
              {[
                { name: '🇺🇸 USA Export Market', hash: '#/export/usa' },
                { name: '🇪🇺 Europe & UK Export', hash: '#/export/europe' },
                { name: '🇦🇺 Australia Export Market', hash: '#/export/australia' },
                { name: '🇦🇪 UAE (Dubai) Export', hash: '#/export/uae' },
                { name: '🇸🇦 Saudi Arabia Export', hash: '#/export/saudi' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => { window.location.hash = item.hash; }}
                    className="hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-300 text-left block"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Compliance, Contact & Colored Socials */}
          <div className="flex flex-col gap-5 text-left">
            <div>
              <h4 className="font-outfit text-[11px] tracking-widest uppercase text-white font-bold pb-2 border-b border-white/5 mb-3">Official Hotlines</h4>
              <ul className="space-y-2 font-light text-neutral-300">
                <li>Export & Sales Desk: <a href="tel:+919672111191" className="text-white hover:text-[#D4AF37] transition-colors font-semibold">+91 96721 11191</a></li>
                <li>Email: <a href="mailto:info@pyrosstones.com" className="text-white hover:text-[#D4AF37] transition-colors font-semibold">info@pyrosstones.com</a></li>
              </ul>

              <div className="mt-4 pt-3 border-t border-white/5">
                <span className="font-outfit text-[9px] tracking-widest uppercase text-[#D4AF37] font-bold block mb-1">Corporate HQ</span>
                <p className="font-inter font-light text-neutral-300">
                  Udaipur, Rajasthan, India
                </p>
              </div>
            </div>

            {/* Colored Social Icons */}
            <div>
              <span className="font-outfit text-[9px] tracking-widest uppercase text-[#D4AF37] font-bold block mb-3">Connect With Us</span>
              <div className="flex items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/919672111191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md"
                  title="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.989-1.873-1.874-4.36-2.907-7.011-2.907-5.441 0-9.866 4.422-9.869 9.866-.001 1.848.49 3.655 1.425 5.247l-.93 3.398 3.484-.914z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/pyros_stones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-[#E4405F] hover:bg-[#E4405F] hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61592202994629"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 shadow-md"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower Row */}
        <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Pyros Marble & Granite Surfaces. Powered by Pyros. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-light">Made with <Heart className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" /> for global luxury builders.</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-neutral-900 hover:bg-[#D4AF37] hover:text-black border border-neutral-800 rounded-md transition-all hover:scale-105 shadow-sm text-neutral-400"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultProduct={enquiryProduct}
      />

      {/* Official Circular Floating WhatsApp Button in Bottom-Right */}
      <a
        href="https://wa.me/919672111191?text=Hello%20Pyros%20Surfaces,%20I%20would%20like%20to%20inquire%20about%20your%20marble%20and%20granite%20slabs."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.55)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.75)] transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
        title="Chat on WhatsApp (+91 96721 11191)"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.989-1.873-1.874-4.36-2.907-7.011-2.907-5.441 0-9.866 4.422-9.869 9.866-.001 1.848.49 3.655 1.425 5.247l-.93 3.398 3.484-.914z" />
        </svg>
      </a>

    </div>
  );
}
