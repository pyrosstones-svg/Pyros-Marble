import React, { useState, useEffect } from 'react';
import { Search, Calendar, Clock, User, ArrowLeft, ArrowRight, MessageSquare, Tag, Bookmark, Share2 } from 'lucide-react';

const blogPosts = [
  {
    id: 'calibrated-marble-tolerance',
    title: 'How We Process Calibrated White Marble down to ±1mm Tolerance',
    category: 'Manufacturing',
    date: 'July 10, 2026',
    readTime: '5 min read',
    author: 'Naresh Dhuwadiya',
    authorRole: 'Managing Director',
    summary: 'A deep-dive look into the Italian diamond wire sawing technologies and vacuum curing processes that calibrate luxury slabs for international custom builds.',
    image: '/calibrated_slicing.png',
    tags: ['Marble Processing', 'Calibration', 'SIMEC Gangsaws', 'Udaipur'],
    content: (
      <div className="space-y-6 font-inter text-neutral-600 text-sm leading-relaxed font-light">
        <p className="text-base text-neutral-800 font-normal">
          In luxury real estate developments, precision is not a choice—it is a baseline constraint. When architects spec floor-to-ceiling book-matched marble panels for lobby facades or custom penthouses, variations in slab thickness can ruin the visual alignment. Here is how we enforce a strict ±1.0mm thickness tolerance at our Udaipur manufacturing hub.
        </p>

        <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21] mt-8">1. Slicing with Italian Diamond Wire Gangsaws</h3>
        <p>
          Standard local saws slice stone block formations using reciprocating steel blades with abrasive slurry. This often results in "bowing" or thickness variations across a single 3-meter slab. At Pyros, we utilize automated <strong>Italian diamond wire gangsaws</strong>. The diamond-impregnated beads run under constant high tension, managed by computerized load sensors that adjust cutting speeds relative to stone hardness in real time. This ensures absolute planarity from the top of the block to the very bottom.
        </p>

        <div className="my-8 border-l-4 border-[#D4AF37] bg-[#FAF9F6] p-6 italic font-cormorant text-lg text-neutral-800">
          “Thickness uniformity is the difference between a seamless marble wall that looks like a single monolithic stone block, and a staggered grid that interrupts veining continuity.”
        </div>

        <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21] mt-8">2. Structural Vacuum Curing & Reinforcement</h3>
        <p>
          Luxury white marbles, such as Lilac or Statuario, naturally feature micro-fissures that define their signature aesthetics. However, these veins represent physical shear planes. To reinforce the slabs prior to grinding, we load the sliced panels into vacuum epoxy chambers. Under high negative pressure, a premium low-viscosity resin is drawn deep into the micro-fissures, curing under strict temperature profiles. This process completely eliminates porosity, ensuring zero shear risk during transport or cutting.
        </p>

        <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21] mt-8">3. Multi-Head Polishing & Gloss Meter Quality Readings</h3>
        <p>
          The final stage runs the cured and calibrated slabs under a 20-head linear polishing system. Each polishing head utilizes progressively finer grit abrasives. To verify the outcome, we measure the surface reflectivity using precision gloss meters. Slabs are only cleared for container shipping once they register a minimum of <strong>95 Gloss Units (GU)</strong> across all quadrants.
        </p>

        <div className="bg-neutral-50 rounded-xl p-6 border border-[#EADCC9]/60 mt-8">
          <h4 className="font-outfit text-xs font-bold text-[#1C1C21] uppercase tracking-wider mb-2">Technical Summary:</h4>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-neutral-600">
            <li><strong>Thickness Tolerance:</strong> Managed down to ±1.0mm.</li>
            <li><strong>Surface Polish Rating:</strong> ≥95 Gloss Units (GU).</li>
            <li><strong>Vein Protection:</strong> Vacuum epoxy cure standard.</li>
            <li><strong>Equipment Base:</strong> Computer-controlled Italian Diamond Wire Gangsaws.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'fcl-logistics-fumigation-crates',
    title: 'FCL Logistics: Guidelines for Stone Export Shipping & ISPM-15 Crating',
    category: 'Logistics',
    date: 'June 28, 2026',
    readTime: '6 min read',
    author: 'Logistics Desk',
    authorRole: 'Operations Team',
    summary: 'Learn the customs bonded protocols, direct shipping port selections, and wood fumigation standards necessary for transit security.',
    image: '/secure_lashing.png',
    tags: ['Logistics', 'ISPM-15', 'FCL Cargo', 'Mundra Port'],
    content: (
      <div className="space-y-6 font-inter text-neutral-600 text-sm leading-relaxed font-light">
        <p className="text-base text-neutral-800 font-normal">
          Exporting massive stone cargo across continents involves navigating extreme mechanical forces during ocean transit. Without compliant crating and rigid container securing protocols, luxury marble or granite slabs risk cracking, moving, or failing customs clearance. Here is our official operations checklist for FCL (Full Container Load) shipments.
        </p>

        <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21] mt-8">1. The Necessity of ISPM-15 Pine Wood Crates</h3>
        <p>
          All solid wood packaging material used in international trade must undergo heat treatment or methyl bromide fumigation to eliminate pests. This is the **ISPM-15 standard**. At our warehouse yards, we construct custom heavy-duty crates using fumigated pine wood. Slabs are loaded back-to-back inside these crates, cushioned with high-density foam padding to prevent face-rubbing or scratches during sea movements.
        </p>

        <div className="my-8 border-l-4 border-[#D4AF37] bg-[#FAF9F6] p-6 italic font-cormorant text-lg text-neutral-800">
          “Customs departments in the US, EU, and UK inspect ISPM-15 stamps rigidly. A single non-compliant crate can result in entire container quarantine, costing thousands in demurrage charges.”
        </div>

        <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21] mt-8">2. FCL High-Tension Lashing & Bracing</h3>
        <p>
          Heavy stone slabs exert immense gravitational force. When container vessels encounter rough waters, crates can shift and tip. To prevent this, our logistics crews secure the crates inside standard 20ft heavy-duty shipping containers using:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong>High-Tension Steel Straps:</strong> Banding wood structures directly to container wall anchors.</li>
          <li><strong>Choking & Bracing Blocks:</strong> Driving pine wedges into container floor panels to arrest lateral slide.</li>
          <li><strong>Heavy Nylon D-Ring Lashing ropes:</strong> Creating a secondary tension net for maximum shift prevention.</li>
        </ul>

        <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21] mt-8">3. Strategic Port Routing</h3>
        <p>
          We coordinate with premier Indian container hubs depending on cargo type and target market:
          Mundra Port (Gujarat) handles North Indian marble FCLs, while Krishnapatnam or Chennai Ports handle southern granite blocks. This strategy minimizes local inland freight cost, ensuring the B2B quote we deliver is highly competitive.
        </p>
      </div>
    )
  },
  {
    id: 'statuario-vs-lilac-marble-design',
    title: 'Statuario vs Lilac Marble: Aesthetic Decisions in Luxury Interiors',
    category: 'Design Trends',
    date: 'May 14, 2026',
    readTime: '4 min read',
    author: 'Design Desk',
    authorRole: 'Creative Director',
    summary: 'Explore visual contrasts, vein profiles, and layout patterns for choosing marble panel walls in modern premium residences.',
    image: '/why_choose_us_slabs.png',
    tags: ['Interior Design', 'Luxury Marble', 'Statuario', 'Lilac Marble'],
    content: (
      <div className="space-y-6 font-inter text-neutral-600 text-sm leading-relaxed font-light">
        <p className="text-base text-neutral-800 font-normal">
          Marble is not just a building material; it is a canvas of natural history. Among luxury interior design circles, two stones dominate focal walls, high-end baths, and monolithic kitchen islands: **Statuario White** and **Milas Lilac**. Here is how to select the right aesthetic profile for your luxury build.
        </p>

        <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21] mt-8">1. Statuario: Classic Italian Minimalism</h3>
        <p>
          Statuario is defined by its crisp, bright white background and bold, sweeping grey veins. It offers a structured, classical form of luxury. Designers use Statuario to establish structural flow, often utilizing **book-matched** pairs to create symmetry over fireplaces or entrance halls. Because the vein patterns are distinct and isolated, it doesn't overcrowd small spaces, keeping modern minimalist interiors bright and airy.
        </p>

        <div className="my-8 border-l-4 border-[#D4AF37] bg-[#FAF9F6] p-6 italic font-cormorant text-lg text-neutral-800">
          “Statuario brings light reflection and structured elegance; Lilac brings artistic contrast and expressive movement. The choice depends on whether the stone is a background player or the main exhibit.”
        </div>

        <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21] mt-8">2. Lilac: Artistic Drama & Purple Veining</h3>
        <p>
          Lilac marble is a statement of artistic expression. Characterized by a spiderweb of deep violet, purple, and charcoal veins across a cool white canvas, it instantly draws attention. It functions best as a decorative focal element—think feature walls in powder rooms, book-matched headboards, or matching master bath countertops.
        </p>

        <h3 className="font-cormorant text-2xl font-bold text-[#1C1C21] mt-8">3. Finishes: Polished vs Honed</h3>
        <p>
          For public lobbies and vertical panel displays, a high-gloss polished finish emphasizes veining depth. For floor zones or wet room walls, we recommend a satin-smooth honed finish. Honed marble reduces reflections, creating a soft, tactile experience under ambient lighting while protecting against visible acid-etching or scratches.
        </p>
      </div>
    )
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePostId, setActivePostId] = useState(null);

  // Scroll to top on post read transitions
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePostId]);

  const categories = ['All', 'Manufacturing', 'Logistics', 'Design Trends'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activePost = blogPosts.find(p => p.id === activePostId);

  const handleEnquiry = (stoneName) => {
    if (window.openEnquiryModal) {
      window.openEnquiryModal(stoneName);
    } else {
      window.location.hash = `#/contact?product=${encodeURIComponent(stoneName)}`;
    }
  };

  if (activePost) {
    const recentPosts = blogPosts.filter(p => p.id !== activePostId);

    return (
      <div className="bg-[#FAF9F6] min-h-screen py-28 border-b border-[#EADCC9]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Article (8 Columns) */}
          <article className="lg:col-span-8 space-y-8 bg-white border border-[#EADCC9] rounded-3xl p-8 md:p-12 shadow-sm text-left">
            
            {/* Back Button */}
            <button 
              onClick={() => setActivePostId(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </button>

            {/* Title & Metadata */}
            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <span className="px-3 py-1 text-[9px] font-mono tracking-widest bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 uppercase font-bold rounded">
                {activePost.category}
              </span>
              <h1 className="font-cormorant text-3xl sm:text-5xl font-medium text-[#1C1C21] leading-tight">
                {activePost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-xs text-[#8E8E93] pt-2 font-light">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {activePost.author} ({activePost.authorRole})
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {activePost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {activePost.readTime}
                </span>
              </div>
            </div>

            {/* Feature Image */}
            <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-inner border border-neutral-100">
              <img 
                src={activePost.image} 
                alt={activePost.title} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* Article Content */}
            <div className="pt-4 border-t border-neutral-100">
              {activePost.content}
            </div>

            {/* Tags and Share */}
            <div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-[#D4AF37]" />
                {activePost.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] bg-neutral-50 text-neutral-600 border border-neutral-200 px-2.5 py-0.5 rounded-full font-light">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleEnquiry(activePost.title)}
                  className="px-5 py-2.5 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs tracking-wider uppercase font-bold rounded-lg shadow-sm transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  Ask Materials Enquiry
                </button>
              </div>
            </div>

          </article>

          {/* Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-8 text-left">
            
            {/* Author Profile */}
            <div className="bg-white border border-[#EADCC9] rounded-3xl p-6 shadow-sm">
              <span className="font-outfit text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold block mb-4">Article Insights</span>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-100 overflow-hidden border border-[#D4AF37]/30 flex items-center justify-center font-bold text-neutral-800 text-lg">
                  {activePost.author[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-outfit text-sm font-bold text-[#1C1C21]">{activePost.author}</span>
                  <span className="text-xs text-neutral-500 font-light mt-0.5">{activePost.authorRole}</span>
                </div>
              </div>
              <p className="font-inter text-xs text-neutral-500 leading-relaxed font-light mt-4 pt-4 border-t border-neutral-100">
                Pyros Stone export experts share calibration reports, logistics schedules, and material selection guides for global architects and builders.
              </p>
            </div>

            {/* Recent Articles */}
            <div className="bg-white border border-[#EADCC9] rounded-3xl p-6 shadow-sm space-y-4">
              <h3 className="font-outfit text-xs tracking-widest uppercase text-[#1C1C21] font-bold pb-2 border-b border-neutral-100">
                Recent Articles
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div 
                    key={post.id} 
                    onClick={() => setActivePostId(post.id)}
                    className="group cursor-pointer flex gap-4 items-start pb-4 border-b border-neutral-100/60 last:pb-0 last:border-b-0"
                  >
                    <div className="w-20 aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100 flex-shrink-0 border border-neutral-200">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-outfit text-xs font-bold text-[#1C1C21] line-clamp-2 leading-snug group-hover:text-[#D4AF37] transition-colors">
                        {post.title}
                      </h4>
                      <span className="text-[10px] text-neutral-400 font-light block">
                        {post.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-[#1C1C21] text-white rounded-3xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl" />
              <span className="font-outfit text-[9px] tracking-widest text-[#D4AF37] uppercase font-bold block mb-2">Subscribe</span>
              <h4 className="font-cormorant text-2xl font-bold leading-tight">Join Export updates</h4>
              <p className="font-inter text-xs text-neutral-400 font-light leading-relaxed mt-2">
                Receive freight rate alerts, newly calibrated quarry blocks, and custom stone catalog updates once a month.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]/50"
                />
                <button className="w-full py-3 bg-[#D4AF37] hover:bg-[#b59228] text-black text-xs font-bold uppercase tracking-wider rounded-lg transition-colors">
                  Join Newsletter
                </button>
              </div>
            </div>

          </aside>

        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-28 border-b border-[#EADCC9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="text-left mb-16 max-w-3xl">
          <span className="font-outfit text-xs tracking-[0.25em] text-[#D4AF37] uppercase font-bold block mb-2">
            Stone Industry Insights
          </span>
          <h1 className="font-cormorant text-4xl sm:text-6xl font-medium text-[#1C1C21]">
            Our Blogs & Publications
          </h1>
          <p className="font-inter text-sm text-[#4E4E59] leading-relaxed font-light mt-4">
            Browse technical guides, quarry extraction briefings, ocean cargo reports, and premium stone design trends compiled by the Pyros stones export desks.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border border-[#EADCC9] rounded-2xl p-4 mb-12 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#D4AF37] text-black shadow-sm'
                    : 'bg-neutral-50 text-[#8E8E93] border border-neutral-200 hover:border-[#D4AF37]/40 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search articles & tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-lg text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-[#D4AF37]/50"
            />
          </div>
        </div>

        {/* Grid Index */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <div 
                key={post.id}
                onClick={() => setActivePostId(post.id)}
                className="group cursor-pointer flex flex-col bg-white border border-[#EADCC9] rounded-3xl overflow-hidden shadow-sm hover:border-[#D4AF37]/50 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 h-full"
              >
                {/* Thumbnail */}
                <div className="aspect-[4/3] overflow-hidden relative border-b border-neutral-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 z-10" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#D4AF37] border border-[#EADCC9] text-[9px] tracking-widest uppercase font-bold px-3 py-1 rounded z-20 shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Body details */}
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
                    <h3 className="font-outfit text-base font-bold text-[#1C1C21] leading-snug group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-inter text-xs text-neutral-500 leading-relaxed font-light line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100/60 flex items-center justify-between text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                    <span>Read Article</span>
                    <div className="w-7 h-7 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#EADCC9] rounded-2xl p-16 text-center shadow-sm">
            <Bookmark className="w-12 h-12 text-[#D4AF37]/40 mx-auto mb-4" />
            <h3 className="font-outfit text-base font-bold text-[#1C1C21]">No Articles Found</h3>
            <p className="font-inter text-xs text-neutral-500 font-light mt-1">
              Try adjusting your category filter or searching for another term.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
