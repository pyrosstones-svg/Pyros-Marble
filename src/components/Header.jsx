import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

export default function Header({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', name: 'Home' },
    { id: 'about-us', name: 'About Us' },
    { id: 'catalog', name: 'Products', isDropdown: true },
    { id: 'blog', name: 'Blogs' },
    { id: 'contact', name: 'Contact Us' }
  ];

  const productCategories = [
    { id: 'marble', name: 'Marble' },
    { id: 'granite', name: 'Granite' },
    { id: 'sandstone', name: 'Sandstone' },
    { id: 'slate', name: 'Slate Stone' },
    { id: 'limestone', name: 'Limestone' },
    { id: 'quartzite', name: 'Quartzite' },
    { id: 'wall-cladding', name: 'Wall Cladding' },
    { id: 'porcelain', name: 'Porcelain' }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    if (id === 'hero') {
      window.location.hash = '#/';
    } else if (id === 'catalog') {
      window.location.hash = '#/marble';
    } else {
      window.location.hash = `#/${id}`;
    }
  };

  const handleCategoryClick = (catId) => {
    const target = catId || 'marble';
    setActiveSection(target);
    setIsOpen(false);
    window.location.hash = `#/${target}`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-black/5 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#D4AF37]/50 shadow-md transition-colors">
            <img src="/logo.jpeg" alt="Pyros Logo" className="w-full h-full object-cover scale-110" />
          </div>
          <div className="flex flex-col">
            <span className="font-outfit text-lg font-bold tracking-[0.2em] uppercase leading-none text-[#1C1C21]">PYROS</span>
            <span className="font-outfit text-[9px] tracking-[0.15em] uppercase font-semibold mt-1 text-[#D4AF37]">Surfaces Worldwide</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {

            // ── Products Dropdown ──
            if (link.isDropdown) {
              return (
                <div key={link.id} className="relative group py-2">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`font-inter text-xs tracking-wider uppercase transition-colors relative pb-1 flex items-center gap-1.5 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#D4AF37] after:transition-transform after:duration-300 group-hover:after:origin-bottom-left group-hover:after:scale-x-100 ${
                      activeSection === link.id ? 'text-[#D4AF37] font-semibold' : 'text-[#4E4E59] hover:text-[#D4AF37]'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180 text-neutral-400 group-hover:text-[#D4AF37]" />
                  </button>
                  
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 bg-[#FAF9F6] border border-[#EADCC9] rounded-lg shadow-xl py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                    {productCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryClick(cat.id);
                        }}
                        className="w-full text-left px-5 py-3 text-xs text-[#1C1C21] hover:bg-white hover:text-[#D4AF37] font-inter font-medium tracking-wide transition-colors border-b border-[#EADCC9]/40 last:border-b-0 flex items-center justify-between group/item"
                      >
                        <span>{cat.name}</span>
                        <span className="text-[10px] text-[#D4AF37] opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            // ── Regular nav link ──
            let activeClass = '';
            if (activeSection === link.id) {
               activeClass = 'text-[#D4AF37] font-semibold after:scale-x-100';
            } else {
               activeClass = 'text-[#4E4E59] hover:text-[#D4AF37]';
            }

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-inter text-xs tracking-wider uppercase transition-colors relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#D4AF37] after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${activeClass}`}
              >
                {link.name}
              </button>
            )
          })}
        </nav>

        {/* Action Button & Language Indicator */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-xs text-[#4E4E59]">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="font-inter tracking-wider">GLOBAL EXPORTS</span>
          </div>
          <button 
            onClick={() => {
              if (window.openEnquiryModal) {
                window.openEnquiryModal();
              } else {
                handleNavClick('contact');
              }
            }}
            className="px-5 py-2.5 text-xs tracking-wider uppercase font-semibold rounded-md shadow-md transition-all duration-300 hover:shadow-[#D4AF37]/20 hover:-translate-y-0.5 bg-[#D4AF37] text-black hover:bg-[#b59228]"
          >
            Request Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden transition-colors text-[#1C1C21] hover:text-[#D4AF37]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-x-0 bottom-0 top-[73px] bg-[#17171C] z-40 flex flex-col px-8 py-12 md:hidden transition-all duration-300 border-t border-[#D4AF37]/30 shadow-2xl overflow-y-auto ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex flex-col gap-8">
          {navLinks.map((link, idx) => {

            // Products dropdown mobile
            if (link.isDropdown) {
              return (
                <div key={link.id} className="flex flex-col">
                  <button
                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                    className={`text-left font-outfit text-xl tracking-widest uppercase transition-all duration-500 hover:text-[#D4AF37] flex items-center justify-between ${
                      activeSection === link.id ? 'text-[#D4AF37]' : 'text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180 text-[#D4AF37]' : 'text-neutral-400'}`} />
                  </button>
                  <div className={`flex flex-col gap-4 pl-4 overflow-hidden transition-all duration-300 ${
                    isMobileDropdownOpen ? 'max-h-64 mt-4 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}>
                    {productCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className="text-left font-outfit text-sm tracking-widest uppercase text-neutral-400 hover:text-[#D4AF37] transition-colors"
                      >
                        — {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left font-outfit text-xl tracking-widest uppercase transition-all duration-500 hover:text-[#D4AF37] transform ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                } ${
                  activeSection === link.id ? 'text-[#D4AF37]' : 'text-white'
                }`}
                style={{ transitionDelay: `${isOpen ? idx * 75 : 0}ms` }}
              >
                {link.name}
              </button>
            );
          })}
          <div className="h-px bg-white/10 my-4" />
          <div className="flex items-center gap-2 text-sm text-neutral-300">
            <Globe className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-inter tracking-wider">Serving US, UK, Europe, Australia & Arab Countries</span>
          </div>
          <button 
            onClick={() => {
              setIsOpen(false);
              if (window.openEnquiryModal) {
                window.openEnquiryModal();
              } else {
                handleNavClick('contact');
              }
            }}
            className="w-full py-4 text-center font-outfit text-sm font-bold uppercase tracking-widest bg-[#D4AF37] text-black rounded-lg shadow-xl"
          >
            Get Export Quote
          </button>
        </div>
      </div>
    </header>
  );
}
