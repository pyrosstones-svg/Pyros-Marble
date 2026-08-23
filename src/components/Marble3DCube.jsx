import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, Compass, Sparkles, Shuffle } from 'lucide-react';

// Curated pool of exotic marble, granite, quartzite and natural stones
const STONE_COLLECTION = [
  { name: 'Indian Statuario', type: 'MARBLE', img: '/granite IMAGS/INDIAN STATUARIO PGM.JPG' },
  { name: 'River Blue', type: 'MARBLE', img: '/granite IMAGS/RIVER BLUE - MMC.JPG' },
  { name: 'Alaska Gold', type: 'GRANITE', img: '/granite IMAGS/ALASKA GOLD - SS.JPG' },
  { name: 'Patagonia Exotic', type: 'QUARTZITE', img: '/granite IMAGS/PATAGONIA - MMS.JPG' },
  { name: 'Donna Grey', type: 'MARBLE', img: '/granite IMAGS/DONNA GREY - AML.JPG' },
  { name: 'Fantasy Brown', type: 'MARBLE', img: '/granite IMAGS/FANTASY BROWN - TMM.JPG' },
  { name: 'Blue Dunes', type: 'GRANITE', img: '/granite IMAGS/BLUE DUNES - FST.JPG' },
  { name: 'Cosmos Black', type: 'GRANITE', img: '/granite IMAGS/COSMOS BLACK MT.JPG' },
  { name: 'Crystallo Oro', type: 'QUARTZITE', img: '/granite IMAGS/CRYSTALLO ORO - SJQ.JPG' },
  { name: 'Black Fantasy', type: 'GRANITE', img: '/granite IMAGS/BLACK FANTASY BS.JPG' },
  { name: 'Maharaja Quartzite', type: 'QUARTZITE', img: '/granite IMAGS/MAHARAJA QUARTZITE - VKG.JPG' },
  { name: 'White Exotic', type: 'MARBLE', img: '/granite IMAGS/WHITE EXOTIC UGM.JPG' },
  { name: 'Alpine Forest', type: 'GRANITE', img: '/granite IMAGS/ALPINE FOREST AQ.JPG' },
  { name: 'Da Vinci', type: 'QUARTZITE', img: '/granite IMAGS/DA VINCI - SNS.JPG' },
  { name: 'Pink Patagonia', type: 'EXOTIC', img: '/granite IMAGS/PINK PATAGONIA - MK.JPG' },
  { name: 'Nero Marquina', type: 'MARBLE', img: '/granite IMAGS/INDIAN NERO MARINCE - PSL.JPG' },
  { name: 'Monalisa Marble', type: 'MARBLE', img: '/granite IMAGS/MONALISA - CM.JPG' },
  { name: 'Volcanic White', type: 'MARBLE', img: '/granite IMAGS/VOLCANIC WHITE VS.JPG' },
  { name: 'Azul Novae', type: 'QUARTZITE', img: '/granite IMAGS/AZUL NOVAE.jpg' },
  { name: 'White Glimmer', type: 'MARBLE', img: '/granite IMAGS/WHITE GLIMMER - HM.JPG' },
  { name: 'Teak Wood', type: 'SANDSTONE', img: '/granite IMAGS/TEAK WOOD -SST.JPG' },
  { name: 'Ocean Black', type: 'GRANITE', img: '/granite IMAGS/OCEAN BLACK - MS.JPG' },
  { name: 'Bianco Typhoon', type: 'GRANITE', img: '/granite IMAGS/BIANCO TYPHOON TG.JPG' },
  { name: 'Silver Falls', type: 'GRANITE', img: '/granite IMAGS/SILVER FALLS - HM.JPG' }
];

const FACE_TRANSFORMS = [
  'translateZ(72px)', // Front
  'rotateY(180deg) translateZ(72px)', // Back
  'rotateY(90deg) translateZ(72px)', // Right
  'rotateY(-90deg) translateZ(72px)', // Left
  'rotateX(90deg) translateZ(72px)', // Top
  'rotateX(-90deg) translateZ(72px)' // Bottom
];

export default function Marble3DCube() {
  const [rotation, setRotation] = useState({ x: -20, y: 35 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [stoneOffset, setStoneOffset] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const containerRef = useRef(null);

  // Auto-rotate 3D cube
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

  // Automatically change marble images periodically with smooth cross-fade
  useEffect(() => {
    const changeInterval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setStoneOffset(prev => (prev + 6) % STONE_COLLECTION.length);
        setIsFading(false);
      }, 500); // 500ms fade transition
    }, 4500); // Change stone collection every 4.5 seconds

    return () => clearInterval(changeInterval);
  }, []);

  const handleManualShuffle = (e) => {
    e.stopPropagation();
    setIsFading(true);
    setTimeout(() => {
      setStoneOffset(prev => (prev + 6) % STONE_COLLECTION.length);
      setIsFading(false);
    }, 300);
  };

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

  const [zoom] = useState(1.0);

  // Compute 6 dynamic faces based on current offset
  const currentFaces = FACE_TRANSFORMS.map((transform, index) => {
    const stoneIndex = (stoneOffset + index) % STONE_COLLECTION.length;
    return {
      ...STONE_COLLECTION[stoneIndex],
      transform
    };
  });

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
      className="w-full aspect-[16/10] sm:aspect-[16/9] min-h-[300px] sm:min-h-[340px] rounded-2xl border border-white/20 relative group bg-transparent select-none cursor-grab active:cursor-grabbing flex items-center justify-center p-4"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none rounded-2xl" />

      {/* 3D Scene Perspective Box */}
      <div 
        className="w-full h-full flex items-center justify-center relative py-6"
        style={{ perspective: '800px' }}
      >
        {/* Floor 3D Shadow */}
        <div 
          className="absolute w-32 h-32 rounded-full bg-black/60 blur-xl pointer-events-none transition-transform duration-100"
          style={{
            transform: `translateY(80px) rotateX(90deg) scale(${zoom * 1.1})`,
            opacity: 0.5
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
          {currentFaces.map((face, index) => (
            <div
              key={index}
              className="absolute inset-0 border border-[#D4AF37]/50 rounded-lg overflow-hidden shadow-2xl bg-black/90"
              style={{
                transform: face.transform,
                backfaceVisibility: 'visible'
              }}
            >
              <img
                src={face.img}
                alt={face.name}
                className={`w-full h-full object-cover select-none pointer-events-none transition-opacity duration-500 ease-in-out ${
                  isFading ? 'opacity-25 scale-95' : 'opacity-100 scale-100'
                }`}
              />
              {/* Specular Mirror Polish Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
              
              {/* Face Tag */}
              <div className={`absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-md border border-[#D4AF37]/40 rounded px-2 py-1 flex items-center justify-between text-left pointer-events-none transition-opacity duration-500 ${
                isFading ? 'opacity-20' : 'opacity-100'
              }`}>
                <span className="font-outfit text-[9px] font-bold text-white tracking-wider uppercase truncate max-w-[70%]">{face.name}</span>
                <span className="font-mono text-[7px] font-bold text-[#D4AF37] uppercase px-1 bg-[#D4AF37]/15 rounded shrink-0">{face.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls & Badges Overlay */}
      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none z-10 gap-2">
        <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-md flex items-center gap-2 pointer-events-auto">
          <Compass className="w-3.5 h-3.5 text-[#D4AF37] animate-spin-slow" />
          <span>DRAG MOUSE TO ROTATE 360°</span>
        </span>

        <div className="flex items-center gap-1.5 pointer-events-auto">
          <button
            type="button"
            onClick={handleManualShuffle}
            title="Next Stone Set"
            className="text-[9px] font-mono text-white/90 bg-black/50 hover:bg-[#D4AF37] hover:text-black transition-all backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/15 flex items-center gap-1 font-semibold"
          >
            <Shuffle className="w-3 h-3" />
            <span className="hidden sm:inline">CHANGE</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAutoRotate(prev => !prev)}
            className="text-[9px] font-mono text-white/90 bg-black/50 hover:bg-[#D4AF37] hover:text-black transition-all backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5 font-semibold"
          >
            <RotateCw className={`w-3 h-3 ${isAutoRotate ? 'animate-spin' : ''}`} />
            <span>{isAutoRotate ? 'AUTO-ORBIT ON' : 'PAUSED'}</span>
          </button>
        </div>
      </div>

      {/* Top Floating Badge */}
      <div className="absolute top-2 left-2 pointer-events-none z-10">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          3D INTERACTIVE MARBLE SPECIMEN CUBE
        </span>
      </div>
    </div>
  );
}
