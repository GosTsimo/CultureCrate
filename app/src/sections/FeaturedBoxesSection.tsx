import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { countries } from '../data/countries';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedBoxesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.featured-card').forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-cream py-24 md:py-32">
      <div className="section-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">
              Featured This Month
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-navy font-semibold">
              Cultural Boxes
            </h2>
          </div>
          <Link
            to="/subscribe"
            className="btn-navy mt-6 md:mt-0 group text-xs"
          >
            View All Plans
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Box Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.slice(0, 3).map((country) => (
            <div
              key={country.id}
              className="featured-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={country.heroImage}
                  alt={`${country.name} Edition`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-gold text-navy text-xs font-body font-semibold rounded-full">
                    {country.name} Edition
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <span className="text-xs font-body font-medium text-navy">4.9</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl text-navy font-semibold mb-2">
                  {country.name} Box
                </h3>
                <p className="font-body text-navy/60 text-sm leading-relaxed mb-4">
                  {country.description}
                </p>

                {/* Items preview */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {country.boxItems.slice(0, 3).map((item) => (
                    <span
                      key={item.name}
                      className="px-3 py-1 bg-cream-dark/50 rounded-full text-xs font-body text-navy/70"
                    >
                      {item.name}
                    </span>
                  ))}
                  {country.boxItems.length > 3 && (
                    <span className="px-3 py-1 bg-cream-dark/50 rounded-full text-xs font-body text-navy/70">
                      +{country.boxItems.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-cream-dark/30">
                  <div>
                    <span className="font-display text-2xl text-navy font-semibold">
                      ${country.price}
                    </span>
                    
                  </div>
                  <Link
                    to={`/country/${country.id}`}
                    className="flex items-center gap-1 font-body text-sm font-medium text-gold hover:text-navy transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
