import { useEffect, useRef, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '../data/countries';

export default function Gallery3DSection() {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [targetAngle, setTargetAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [previousAngle, setPreviousAngle] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImage, setViewerImage] = useState('');
  const rafRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cellCount = 12;
  const cellAngle = 360 / cellCount;
  const translateZ = 400;

  const animate = useCallback(() => {
    setCurrentAngle((prev) => {
      const newAngle = prev + (targetAngle - prev) * 0.1;
      const normalizedAngle = newAngle % 360;
      const idx = (Math.round(-normalizedAngle / cellAngle) % cellCount + cellCount) % cellCount;
      setActiveIndex(idx);
      return newAngle;
    });
    rafRef.current = requestAnimationFrame(animate);
  }, [targetAngle]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setPreviousAngle(targetAngle);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startX;
    setTargetAngle(previousAngle + delta * 0.3);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const goNext = () => setTargetAngle((prev) => prev + 30);
  const goPrev = () => setTargetAngle((prev) => prev - 30);

  const openViewer = (img: string) => {
    setViewerImage(img);
    setViewerOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeViewer = () => {
    setViewerOpen(false);
    document.body.style.overflow = '';
  };

  const displayedImages = galleryImages.slice(0, 12);

  return (
    <section className="relative w-full min-h-screen bg-navy py-20 overflow-hidden">
      <div className="text-center mb-12">
        <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
          Our Collection
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-semibold">
          Past Cultural Treasures
        </h2>
      </div>

      {/* 3D Carousel */}
      <div
        ref={containerRef}
        className="relative w-full flex items-center justify-center"
        style={{ height: '500px', perspective: '1000px', cursor: isDragging ? 'grabbing' : 'grab' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div
          className="relative"
          style={{
            width: '240px',
            height: '320px',
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${translateZ}px) rotateX(-5deg) rotateY(${currentAngle}deg)`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
          }}
        >
          {displayedImages.map((img, i) => {
            const angle = i * cellAngle;
            const diff = Math.abs(i - activeIndex);
            const isActive = diff === 0 || diff === 1 || diff === cellCount - 1;

            return (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                  opacity: isActive ? 1 : 0.15,
                  transition: 'opacity 0.3s ease',
                }}
              >
                <div
                  className="w-full h-full relative"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front face */}
                  <div
                    className="absolute inset-0 rounded-lg overflow-hidden cursor-pointer shadow-2xl border border-gold/20"
                    style={{
                      transform: 'translateZ(4px)',
                      backfaceVisibility: 'hidden',
                    }}
                    onClick={() => openViewer(img)}
                  >
                    <img
                      src={img}
                      alt={`Cultural item ${i + 1}`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                  {/* Back face */}
                  <div
                    className="absolute inset-0 rounded-lg bg-navy-light border border-gold/10"
                    style={{
                      transform: 'rotateY(180deg) translateZ(4px)',
                      backfaceVisibility: 'hidden',
                    }}
                  />
                  {/* Side edges for depth */}
                  <div
                    className="absolute bg-navy-light/50"
                    style={{
                      width: '8px',
                      height: '100%',
                      left: 'calc(50% - 4px)',
                      transform: 'rotateY(90deg) translateZ(120px)',
                    }}
                  />
                  <div
                    className="absolute bg-navy-light/50"
                    style={{
                      width: '8px',
                      height: '100%',
                      left: 'calc(50% - 4px)',
                      transform: 'rotateY(-90deg) translateZ(120px)',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={goPrev}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all bg-navy/50 backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all bg-navy/50 backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Counter */}
      <div className="text-center mt-8">
        <p className="font-body text-cream/50 text-sm">
          <span className="text-gold font-semibold">{String(activeIndex + 1).padStart(2, '0')}</span>
          {' / '}
          {String(cellCount).padStart(2, '0')}
        </p>
        <p className="font-body text-cream/30 text-xs mt-2">Drag to explore</p>
      </div>

      {/* Fullscreen Viewer */}
      {viewerOpen && (
        <div
          className="fixed inset-0 z-[100] bg-navy/95 backdrop-blur-xl flex items-center justify-center p-8"
          onClick={closeViewer}
        >
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream hover:text-gold hover:border-gold transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={viewerImage}
            alt="Full view"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
