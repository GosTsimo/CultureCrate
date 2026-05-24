import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {
  ArrowRight, Cookie, Coffee, Gem, BookOpen, QrCode,
  Landmark, UtensilsCrossed, Palette, ChefHat, Music,
  MapPin, Video, ChevronLeft, ChevronRight, Star,
  Gift, Check, Scissors, Wheat, Heart, PenTool, Leaf,
  Droplet, FlaskConical, ToyBrick
} from 'lucide-react';
import { countries } from '../data/countries';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Cookie, Coffee, Gem, BookOpen, QrCode,
  Landmark, UtensilsCrossed, Palette, ChefHat, Music,
  MapPin, Video, Gift, Scissors, Wheat, Heart,
  PenTool, Leaf, Droplet, FlaskConical, ToyBrick,
};

export default function CountryPage() {
  const { id } = useParams<{ id: string }>();
  const country = countries.find((c) => c.id === id);
  const galleryRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!country) return;
    document.title = `${country.name} Edition - CultureCrate`;
    window.scrollTo(0, 0);
  }, [country]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [country]);

  const scrollGallery = (dir: number) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  if (!country) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-navy mb-4">Country Not Found</h1>
          <Link to="/" className="btn-gold">Back to Home</Link>
        </div>
      </div>
    );
  }

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName] || Gift;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div ref={sectionRef} className="bg-cream">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 section-padding">
        <nav className="flex items-center gap-2 font-body text-xs text-navy/50">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/subscribe" className="hover:text-gold transition-colors">Boxes</Link>
          <span>/</span>
          <span className="text-navy font-medium">{country.name} Edition</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
              BOX DETAILS
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy font-semibold mb-4">
              {country.name}
            </h1>
            <h2 className="font-display text-3xl md:text-4xl text-navy/70 font-normal mb-6">
              Edition
            </h2>
            <p className="font-body text-navy/60 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              {country.description}
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Package, label: 'Authentic Items' },
                { icon: BookOpen, label: 'Cultural Stories' },
                { icon: QrCode, label: 'Digital Experiences' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-navy/70"
                >
                  <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-navy/60" />
                  </div>
                  <span className="font-body text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/subscribe" className="btn-gold group">
                Subscribe This Box
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/subscribe" className="btn-outline">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={country.heroImage}
                alt={`${country.name} Edition Box`}
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="text-sm font-body font-semibold text-navy">4.9</span>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/10 rounded-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="bg-cream-dark/30 py-16 md:py-24">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold mb-3">
              What's Inside?
            </h2>
            <p className="font-body text-navy/60 max-w-xl mx-auto">
              Each box contains carefully selected items that represent the heart and soul of {country.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {country.boxItems.map((item) => (
              <div
                key={item.name}
                className="animate-in bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                  <span className="text-navy group-hover:text-gold transition-colors">
                    {getIcon(item.icon)}
                  </span>
                </div>
                <h3 className="font-display text-lg text-navy font-semibold mb-1">
                  {item.name}
                </h3>
                <p className="font-body text-sm text-navy/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Experience Section */}
      <section className="py-16 md:py-24">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
                Cultural Experience
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold mb-4">
                Discover {country.name}
              </h2>
              <p className="font-body text-navy/60 leading-relaxed mb-8">
                Discover {country.name}'s traditions, flavors, music, and artisan crafts through immersive storytelling. Each box comes with a detailed cultural guide.
              </p>

              <div className="space-y-4">
                {country.culturalExperiences.map((exp) => (
                  <div
                    key={exp.title}
                    className="animate-in flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-gold">{getIcon(exp.icon)}</span>
                    </div>
                    <div>
                      <h4 className="font-display text-base text-navy font-semibold mb-0.5">
                        {exp.title}
                      </h4>
                      <p className="font-body text-sm text-navy/60">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={country.galleryImages[1]}
                      alt={`${country.name} culture`}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={country.galleryImages[2]}
                      alt={`${country.name} artisan`}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={country.galleryImages[0]}
                      alt={`${country.name} product`}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Experience Section */}
      <section className="bg-navy py-16 md:py-24">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
              QR Experience
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-cream font-semibold mb-3">
              Unlock the Digital Experience
            </h2>
            <p className="font-body text-cream/60 max-w-xl mx-auto">
              Scan, explore and immerse yourself in {country.name} from home.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 md:w-72">
                {/* Phone frame */}
                <div className="relative bg-navy-dark rounded-[2.5rem] p-3 shadow-2xl border border-cream/10">
                  <div className="bg-navy rounded-[2rem] overflow-hidden aspect-[9/19]">
                    <img
                      src="/phone-screen.jpg"
                      alt="CultureCrate Digital Experience"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-navy-dark rounded-full" />
                </div>
                {/* Decorative glow */}
                <div className="absolute -inset-8 bg-gold/5 rounded-full blur-3xl -z-10" />
              </div>
            </div>

            {/* QR Features */}
            <div className="space-y-6">
              {country.qrExperiences.map((exp) => (
                <div
                  key={exp.title}
                  className="animate-in flex items-start gap-4 p-5 rounded-xl glass-dark"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-gold">{getIcon(exp.icon)}</span>
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-cream font-semibold mb-1">
                      {exp.title}
                    </h4>
                    <p className="font-body text-sm text-cream/60">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="section-padding">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold mb-3">
              Gallery
            </h2>
            <p className="font-body text-navy/60">
              A closer look at what awaits inside.
            </p>
          </div>

          <div className="relative">
            <div
              ref={galleryRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            >
              {country.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-72 md:w-80 rounded-xl overflow-hidden shadow-lg group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={img}
                      alt={`${country.name} gallery ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery arrows */}
            <button
              onClick={() => scrollGallery(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:text-gold transition-colors z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollGallery(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-navy hover:text-gold transition-colors z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Subscription CTA */}
      <section className="py-16 md:py-24 bg-cream-dark/30">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy font-semibold mb-6">
              Start Your {country.name} Journey
            </h2>
            <p className="font-body text-navy/60 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe now and receive your first {country.name} Edition box within 5-7 business days. Cancel anytime.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/subscribe" className="btn-gold text-base px-10 py-4 group">
                Subscribe Now - ${country.price}/mo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-navy/60">
              {[
                'Free shipping worldwide',
                'Cancel anytime',
                'Satisfaction guaranteed',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-gold" />
                  <span className="font-body text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Package(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
    </svg>
  );
}
