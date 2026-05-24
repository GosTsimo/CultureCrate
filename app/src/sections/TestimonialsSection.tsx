import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'New York, USA',
    text: 'The Morocco box was absolutely magical. The brass teapot alone is a work of art. I felt like I was walking through the souks of Marrakech. Every item tells a story.',
    rating: 5,
    country: 'Morocco',
  },
  {
    name: 'James Chen',
    location: 'San Francisco, USA',
    text: "I've subscribed to many culture boxes, but CultureCrate is on another level. The quality, the curation, the digital experiences - it's a complete cultural immersion.",
    rating: 5,
    country: 'Mexico',
  },
  {
    name: 'Elena Rossi',
    location: 'London, UK',
    text: "The Italy box brought tears to my eyes. The olive oil tastes like my grandmother's from Sicily. This isn't just a subscription, it's a journey home.",
    rating: 5,
    country: 'Italy',
  },
  {
    name: 'Marcus Johnson',
    location: 'Toronto, Canada',
    text: "My kids and I unbox these together every month. It's become our family tradition. We learn about new cultures, try new foods, and grow together.",
    rating: 5,
    country: 'Peru',
  },
  {
    name: 'Yuki Tanaka',
    location: 'Tokyo, Japan',
    text: 'The China box was exquisite. The Yixing teapot is now my most treasured possession. The calligraphy set inspired me to learn a new art form.',
    rating: 5,
    country: 'China',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-container',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.testimonials-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section ref={sectionRef} className="w-full bg-navy py-24 md:py-32 overflow-hidden">
      <div className="section-padding">
        <div className="testimonials-container text-center max-w-4xl mx-auto">
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
            What Our Members Say
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-semibold mb-16">
            Stories From Our Community
          </h2>

          {/* Testimonial Card */}
          <div className="relative">
            <Quote className="w-12 h-12 text-gold/20 mx-auto mb-8" />

            <div
              key={current}
              className="animate-fade-in-up"
            >
              <p className="font-display text-xl md:text-2xl lg:text-3xl text-cream leading-relaxed mb-8 italic">
                "{t.text}"
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <div>
                <p className="font-display text-lg text-cream font-semibold">
                  {t.name}
                </p>
                <p className="font-body text-sm text-cream/50">
                  {t.location} &middot; {t.country} Box
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? 'w-8 bg-gold' : 'w-2 bg-cream/30 hover:bg-cream/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
