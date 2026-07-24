import React, { useState } from 'react';

export default function WorldMap() {
  const [selectedPin, setSelectedPin] = useState(null);

  // Pin coordinates mapped to SVG viewBox="0 0 700 340"
  const pins = [
    { 
      id: 'US', 
      shortLabel: 'USA',
      name: 'United States (USA Port Terminals)', 
      x: 165, 
      y: 130, 
      details: 'Dedicated ocean freight container shipments of premium marble slabs, granite tiles, and engineered quartz to major US ports (New York, Houston, Los Angeles).' 
    },
    { 
      id: 'CA', 
      shortLabel: 'Canada',
      name: 'Canada (North America Terminal)', 
      x: 175, 
      y: 98, 
      details: 'Regular ocean freight contract deliveries of premium quartz & marble slabs to regional North American distributors.' 
    },
    { 
      id: 'BR', 
      shortLabel: 'Brazil (S. America)',
      name: 'South America (Brazil & Latin America Hub)', 
      x: 245, 
      y: 220, 
      details: 'Strategic maritime shipping routes supplying polished granite slabs, marble, and customized architectural quartz to South American distribution networks.' 
    },
    { 
      id: 'GB', 
      shortLabel: 'UK / Europe',
      name: 'United Kingdom & Europe Gateway', 
      x: 348, 
      y: 108, 
      details: 'Direct shipping routes delivering custom cut-to-size granite & marble architectural panels across European markets.' 
    },
    { 
      id: 'ZA', 
      shortLabel: 'S. Africa',
      name: 'Africa Trade Hub (Durban & Cape Town)', 
      x: 395, 
      y: 250, 
      details: 'Direct maritime trade logistics delivering high-durability granite, marble, and quartz tiles to African commercial developments.' 
    },
    { 
      id: 'IN', 
      shortLabel: 'India HQ ✦',
      name: 'Udaipur, India (Pyros HQ & Quarries)', 
      x: 503, 
      y: 178, 
      details: 'Corporate headquarters, stone extraction quarries, Italian gangsaw processing yards, and seaworthy bundle packing.' 
    },
    { 
      id: 'SA', 
      shortLabel: 'Saudi Arabia',
      name: 'Saudi Arabia Project Desk', 
      x: 445, 
      y: 185, 
      details: 'Bulk cargo supply coordinates of premium gangsaw slabs for active commercial real estate developments.' 
    },
    { 
      id: 'AE', 
      shortLabel: 'Dubai (UAE)',
      name: 'United Arab Emirates / Dubai Terminal', 
      x: 465, 
      y: 180, 
      details: 'Gulf cargo clearing hub coordinating direct flatbed deliveries to active construction sites.' 
    },
    { 
      id: 'RU', 
      shortLabel: 'Russia',
      name: 'Russia / Eurasia Region Hub', 
      x: 520, 
      y: 95, 
      details: 'High-volume block exports and slab packages supplied for large-scale administrative facade projects.' 
    },
    { 
      id: 'SG', 
      shortLabel: 'Singapore',
      name: 'Southeast Asia Hub (Singapore / APAC)', 
      x: 550, 
      y: 205, 
      details: 'Fast-track container shipping serving high-density residential and hospitality projects across Southeast Asia.' 
    },
    { 
      id: 'AU', 
      shortLabel: 'Australia',
      name: 'Australia Distribution Hub', 
      x: 610, 
      y: 258, 
      details: 'FCL ocean freight deliveries of highly polished engineered quartz and natural granite kitchen worktops.' 
    }
  ];

  return (
    <div className="relative bg-neutral-950/70 backdrop-blur-md border border-neutral-800 rounded-xl p-4 md:p-6 shadow-2xl w-full text-white overflow-hidden">
      
      {/* Map Section Title Bar */}
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
          <span className="font-outfit text-xs uppercase font-bold tracking-widest text-[#D4AF37]">
            Global Logistics Network Map
          </span>
        </div>
        <span className="text-[10px] font-mono text-neutral-400 hidden sm:block">
          Click any country pin to view export specs
        </span>
      </div>

      {/* World Map SVG Aspect Frame */}
      <div className="relative w-full aspect-[700/340] bg-neutral-900/60 rounded-lg overflow-hidden border border-white/10 shadow-inner">
        
        {/* World Map SVG Object with crisp border visibility */}
        <object 
          type="image/svg+xml" 
          data="/world-map.svg" 
          className="w-full h-full pointer-events-none opacity-90"
        />

        {/* Cargo Connection Tracks Layer */}
        <svg 
          viewBox="0 0 700 340" 
          className="absolute inset-0 w-full h-full pointer-events-none z-5"
        >
          {/* Paths connecting HQ in Udaipur, India (503, 178) to global destinations */}
          {/* India to United States (USA) */}
          <path d="M 503 178 Q 329 110 165 130" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
          {/* India to Canada */}
          <path d="M 503 178 Q 339 90 175 98" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
          {/* India to South America (Brazil) */}
          <path d="M 503 178 Q 369 220 245 220" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
          {/* India to Europe (UK) */}
          <path d="M 503 178 Q 427.5 120 348 108" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
          {/* India to Africa (South Africa) */}
          <path d="M 503 178 Q 445 230 395 250" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
          {/* India to Saudi Arabia */}
          <path d="M 503 178 Q 474 181.5 445 185" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
          {/* India to Dubai, UAE */}
          <path d="M 503 178 Q 482.5 174 465 180" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
          {/* India to Russia */}
          <path d="M 503 178 Q 511.5 136.5 520 95" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
          {/* India to Southeast Asia (Singapore) */}
          <path d="M 503 178 Q 525 195 550 205" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
          {/* India to Australia */}
          <path d="M 503 178 Q 556.5 219 610 258" fill="none" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash opacity-80" />
        </svg>

        {/* Pin markers positioned using calculated percentage translations */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {pins.map((pin) => {
            const leftPct = (pin.x / 700) * 100;
            const topPct = (pin.y / 340) * 100;
            const isSelected = selectedPin?.id === pin.id;

            return (
              <div
                key={pin.id}
                className="absolute pointer-events-auto cursor-pointer group"
                style={{ 
                  left: `${leftPct}%`, 
                  top: `${topPct}%`, 
                  transform: 'translate(-50%, -100%)' 
                }}
                onClick={() => setSelectedPin(pin)}
              >
                {/* Marker with floating text label */}
                <div className="relative flex flex-col items-center">
                  
                  {/* Ping Animation Indicator */}
                  <span className={`absolute top-0 w-6 h-6 rounded-full ${
                    pin.id === 'IN' ? 'bg-[#D4AF37] animate-ping' : 'bg-[#D4AF37]/50 animate-ping'
                  } -translate-y-2`} />
                  
                  {/* Floating Country Name Badge */}
                  <div className={`whitespace-nowrap px-1.5 py-0.5 rounded text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider mb-0.5 border shadow-lg transition-all duration-300 ${
                    isSelected 
                      ? 'bg-[#D4AF37] text-black border-white scale-110 z-30' 
                      : pin.id === 'IN' 
                      ? 'bg-[#D4AF37] text-black border-white/60 font-extrabold z-20 shadow-[0_0_10px_rgba(212,175,55,0.6)]' 
                      : 'bg-[#1C1C21]/90 text-white border-[#D4AF37]/50 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:scale-105'
                  }`}>
                    {pin.shortLabel}
                  </div>

                  {/* Teardrop Marker SVG */}
                  <svg 
                    viewBox="0 0 24 24" 
                    className={`w-5 h-5 drop-shadow-md group-hover:scale-125 transition-transform duration-300 ${
                      pin.id === 'IN' ? 'text-[#D4AF37] fill-[#D4AF37]' : 'text-[#D4AF37] fill-[#D4AF37]'
                    }`}
                  >
                    <path 
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                      fill="#D4AF37" 
                      stroke="#FFFFFF" 
                      strokeWidth="0.75" 
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Info display panel */}
      <div className="mt-4 bg-neutral-900/60 border border-neutral-800 rounded-lg p-4 text-white min-h-[80px] flex flex-col justify-center">
        {selectedPin ? (
          <div className="animate-fadeIn">
            <span className="font-outfit text-[9px] tracking-widest uppercase font-bold text-[#D4AF37] block mb-1">
              Active Export Node
            </span>
            <div className="font-outfit text-sm font-bold text-white">
              {selectedPin.name}
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed font-light mt-1">
              {selectedPin.details}
            </p>
          </div>
        ) : (
          <div className="text-center py-2 text-xs text-neutral-400 italic">
            Click on any gold pin on the world map to view active export logistics and node specifications.
          </div>
        )}
      </div>

    </div>
  );
}
