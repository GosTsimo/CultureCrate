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
    <section className="relative w-full min-h-[100svh] flex flex-col lg:flex-row overflow-hidden bg-[#14213d]">
      {/* Particle Background behind everything */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Left Content Side */}
      <div className="w-full lg:w-[45%] relative z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-28 pb-32 pt-28 lg:py-0 min-h-[100svh] lg:min-h-screen">
        <div key={currentSlide} className="animate-fade-in-up max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
          <p className="font-body text-[#BC9B70] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-4 sm:mb-6">
            {slide.subtitle}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F9F7F2] leading-[1.1] mb-5 sm:mb-6 drop-shadow-md">
            {slide.title}
          </h1>
          <p className="font-body text-[#F9F7F2]/80 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0">
            {slide.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to={slide.link}
              className="bg-[#BC9B70] text-[#14213d] px-7 sm:px-8 py-3.5 rounded-sm font-semibold hover:bg-[#a6865c] transition-all flex items-center group shadow-md"
            >
              {slide.cta}
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 lg:bottom-12 left-0 right-0 lg:left-20 xl:left-28 lg:right-auto z-20 flex justify-center lg:justify-start px-6 lg:px-0">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-[3px] rounded-sm transition-all duration-500 ${
                    i === currentSlide
                      ? 'w-10 bg-[#BC9B70]'
                      : 'w-5 bg-[#F9F7F2]/20 hover:bg-[#F9F7F2]/40'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-[#F9F7F2]/20 flex items-center justify-center text-[#F9F7F2]/80 hover:text-[#14213d] hover:bg-[#BC9B70] hover:border-[#BC9B70] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-[#F9F7F2]/20 flex items-center justify-center text-[#F9F7F2]/80 hover:text-[#14213d] hover:bg-[#BC9B70] hover:border-[#BC9B70] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="absolute inset-0 lg:relative lg:w-[55%] w-full h-[100svh] lg:h-screen z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#14213d]/40 via-[#14213d]/60 to-[#14213d] lg:bg-gradient-to-r lg:from-[#14213d] lg:via-[#14213d]/50 lg:to-transparent z-10 pointer-events-none" />
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover lg:object-left"
            />
            {/* Soft overlay to blend image better with the dark background */}
            <div className="absolute inset-0 bg-[#14213d]/20 mix-blend-multiply" />
          </div>
        ))}
      </div>
    </section>
  );
}
