import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ParticleField from '../components/ParticleField';

const heroSlides = [
  {
    title: 'Discover the World',
    subtitle: 'From Your Doorstep',
    description: 'Every month, a new culture unfolds. Authentic artisan products, curated stories, and immersive digital experiences delivered to you.',
    cta: 'Explore Our Boxes',
    link: '/subscribe',
    image: '/gallery/box-morocco-1.jpg',
  },
  {
    title: 'Morocco Edition',
    subtitle: 'Now Available',
    description: 'A curated journey through Morocco\'s rich traditions, flavors, and artisan heritage. From zellige to argan, discover the magic.',
    cta: 'View Morocco Box',
    link: '/country/morocco',
    image: '/gallery/box-morocco-hero.jpg',
  },
  {
    title: 'Authentic & Ethical',
    subtitle: 'Curated With Care',
    description: 'We work directly with local artisans and fair-trade partners to bring you the most authentic cultural experiences.',
    cta: 'Our Story',
    link: '/about',
    image: '/gallery/box-morocco-4.jpg',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(intervalRef.current);
  }, [currentSlide]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-screen min-h-[700px] bg-navy overflow-hidden">
      {/* Particle Background */}
      <ParticleField />

      {/* Background Images */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === currentSlide ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center section-padding">
        <div className="max-w-3xl">
          <div
            key={currentSlide}
            className="animate-fade-in-up"
          >
            <p className="font-body text-gold text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4">
              {slide.subtitle}
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-cream leading-[1.05] mb-6">
              {slide.title}
            </h1>
            <p className="font-body text-cream/70 text-base md:text-lg leading-relaxed max-w-xl mb-8">
              {slide.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={slide.link}
                className="btn-gold group"
              >
                {slide.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/country/morocco"
                className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-navy"
              >
                View Morocco Box
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-12 left-0 right-0 z-20 section-padding">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === currentSlide
                    ? 'w-10 bg-gold'
                    : 'w-5 bg-cream/30 hover:bg-cream/50'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 rounded-full border border-cream/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
