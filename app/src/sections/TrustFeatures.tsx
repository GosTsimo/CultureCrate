import { useEffect, useRef } from 'react';
import { Package, Shield, Leaf, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Package,
    title: 'Curated With Care',
    description: 'Every item is selected with purpose and intention.',
  },
  {
    icon: Shield,
    title: 'Authentic & Ethical',
    description: 'We work with local artisans and fair-trade partners.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Packaging',
    description: 'Eco-friendly materials and reusable packaging.',
  },
  {
    icon: Heart,
    title: 'More Than a Box',
    description: "It's a cultural journey and experience.",
  },
];

export default function TrustFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.trust-feature').forEach((feature, i) => {
        gsap.fromTo(
          feature,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: feature,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-cream border-y border-cream-dark/30 py-16 md:py-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="trust-feature flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg text-navy font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-navy/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
