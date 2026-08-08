import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, Compass, Sparkles } from 'lucide-react';

export default function Marble3DCube() {
  const [rotation, setRotation] = useState({ x: -20, y: 35 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const containerRef = useRef(null);

  // Auto-rotate effect when idle
  useEffect(() => {
    if (!isAutoRotate || isDragging) return;
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x,
        y: (prev.y + 0.6) % 360
      }));
    }, 20);
    return () => clearInterval(interval);
  }, [isAutoRotate, isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setIsAutoRotate(false);
    setDragStart({
      x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
      y: e.clientY || (e.touches && e.touches[0].clientY) || 0
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;

    setRotation(prev => ({
      x: Math.max(-80, Math.min(80, prev.x - deltaY * 0.4)),
      y: prev.y + deltaX * 0.4
    }));

    setDragStart({ x: clientX, y: clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const [zoom, setZoom] = useState(1.0);

  // Cube Faces with high-res HD stone textures
  const cubeFaces = [
    { 
      name: 'Viscon White', 
      type: 'GRANITE', 
      img: '/images/stones/hd_viscount_white_granite.png',
      transform: 'translateZ(72px)'
    },
    { 
      name: 'Absolute Black', 
      type: 'GRANITE', 
      img: '/images/stones/hd_absolute_black_granite_full_texture.png',
      transform: 'rotateY(180deg) translateZ(72px)'
    },
    { 
      name: 'Himalayan Blue', 
      type: 'GRANITE', 
      img: '/images/stones/hd_himalayan_blue_granite.png',
      transform: 'rotateY(90deg) translateZ(72px)'
    },
    { 
      name: 'Black Galaxy', 
      type: 'GRANITE', 
      img: '/images/stones/hd_black_galaxy_granite_full_texture.png',
      transform: 'rotateY(-90deg) translateZ(72px)'
    },
    { 
      name: 'Super White', 
      type: 'QUARTZITE', 
      img: '/images/stones/hd_super_white_quartzite_full_texture.png',
      transform: 'rotateX(90deg) translateZ(72px)'
    },
    { 
      name: 'Jaisalmer Gold', 
      type: 'SANDSTONE', 
      img: '/images/stones/hd_jaisalmer_yellow_sandstone.png',
      transform: 'rotateX(-90deg) translateZ(72px)'
    }
  ];

  return (
    <div 
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
      className="w-full aspect-[16/10] sm:aspect-[16/9] min-h-[320px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative group bg-gradient-to-b from-[#1C1C21]/95 to-black select-none cursor-grab active:cursor-grabbing flex items-center justify-center p-4"
    >
      {/* Background Studio Lighting & Perspective Stage */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_75%)] pointer-events-none" />

      {/* 3D Scene Perspective Box */}
      <div 
        className="w-full h-full flex items-center justify-center relative py-6"
        style={{ perspective: '800px' }}
      >
        {/* Floor 3D Shadow */}
        <div 
          className="absolute w-32 h-32 rounded-full bg-black/90 blur-xl pointer-events-none transition-transform duration-100"
          style={{
            transform: `translateY(80px) rotateX(90deg) scale(${zoom * 1.1})`,
            opacity: 0.85
          }}
        />

        {/* 3D Cube Object */}
        <div
          className="w-36 h-36 sm:w-36 sm:h-36 relative transition-transform duration-75"
          style={{
            transformStyle: 'preserve-3d',
            transform: `scale(${zoom}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
          }}
        >
          {cubeFaces.map((face, index) => (
            <div
              key={index}
              className="absolute inset-0 border border-[#D4AF37]/50 rounded-lg overflow-hidden shadow-2xl bg-black"
              style={{
                transform: face.transform,
                backfaceVisibility: 'visible'
              }}
            >
              <img
                src={face.img}
                alt={face.name}
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              {/* Specular Mirror Polish Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
              
              {/* Face Tag */}
              <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-md border border-[#D4AF37]/40 rounded px-2 py-1 flex items-center justify-between text-left pointer-events-none">
                <span className="font-outfit text-[9px] font-bold text-white tracking-wider uppercase truncate">{face.name}</span>
                <span className="font-mono text-[7px] font-bold text-[#D4AF37] uppercase px-1 bg-[#D4AF37]/15 rounded">{face.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls & Badges Overlay */}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-md flex items-center gap-2 pointer-events-auto">
          <Compass className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-slow" />
          <span>DRAG MOUSE TO ROTATE 360°</span>
        </span>

        <button
          type="button"
          onClick={() => setIsAutoRotate(prev => !prev)}
          className="text-[9px] font-mono text-white/90 bg-black/70 hover:bg-[#D4AF37] hover:text-black transition-all backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 pointer-events-auto flex items-center gap-1.5 font-semibold"
        >
          <RotateCw className={`w-3 h-3 ${isAutoRotate ? 'animate-spin' : ''}`} />
          <span>{isAutoRotate ? 'AUTO-ORBIT ON' : 'PAUSED'}</span>
        </button>
      </div>

      {/* Top Floating Badge */}
      <div className="absolute top-3 left-4 pointer-events-none z-10">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          3D INTERACTIVE MARBLE SPECIMEN CUBE
        </span>
      </div>
    </div>
  );
}
