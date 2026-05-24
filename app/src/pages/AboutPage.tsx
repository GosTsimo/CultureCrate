import { useEffect, useRef } from 'react';
import { Globe, Heart, Users, Leaf, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Globe,
    title: 'Cultural Connection',
    description: 'We believe in the power of cultural exchange to foster understanding, empathy, and unity across borders.',
  },
  {
    icon: Heart,
    title: 'Artisan Support',
    description: 'Every item comes directly from skilled artisans, ensuring fair wages and preserving traditional crafts.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Our community of culture enthusiasts shares stories, recipes, and experiences from around the world.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Future',
    description: 'Eco-friendly packaging and sustainable sourcing are at the heart of everything we do.',
  },
];

const team = [
  {
    name: 'Amara Okafor',
    role: 'Founder & CEO',
    bio: 'A world traveler and cultural anthropologist with a passion for connecting people through shared experiences.',
  },
  {
    name: 'Marco Rossi',
    role: 'Head of Curation',
    bio: 'Former luxury brand buyer with an eye for authentic craftsmanship and emerging artisans worldwide.',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Digital Experience Lead',
    bio: 'Tech innovator creating immersive AR and digital storytelling experiences for each cultural box.',
  },
  {
    name: 'Sofia Martinez',
    role: 'Artisan Partnerships',
    bio: 'Building lasting relationships with artisan communities across five continents.',
  },
];

const stats = [
  { value: '50K+', label: 'Happy Members' },
  { value: '25+', label: 'Countries Explored' },
  { value: '500+', label: 'Artisan Partners' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'About Us - CultureCrate';
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-in').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-cream min-h-screen pt-24">
      {/* Hero */}
      <section className="section-padding py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-navy font-semibold mb-6">
            Bringing Cultures<br />Closer Together
          </h1>
          <p className="font-body text-navy/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            CultureCrate was born from a simple belief: that the world becomes smaller, kinder, and more beautiful when we experience each other's cultures.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-gold font-semibold mb-2">{stat.value}</p>
                <p className="font-body text-cream/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">Our Mission</p>
              <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold mb-4">
                One Box, A Thousand Stories
              </h2>
              <p className="font-body text-navy/60 leading-relaxed mb-4">
                Every CultureCrate box is more than a collection of beautiful objects. It's a carefully curated journey into the heart of a culture, designed to educate, inspire, and connect.
              </p>
              <p className="font-body text-navy/60 leading-relaxed mb-4">
                We work directly with local artisans, cooperatives, and cultural experts to bring you authentic, meaningful items that tell the story of their makers and their heritage.
              </p>
              <p className="font-body text-navy/60 leading-relaxed">
                From the zellige workshops of Fez to the tea plantations of Yunnan, every item has a story, and we can't wait to share them with you.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/gallery/box-morocco-1.jpg"
                  alt="CultureCrate mission"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-dark/30 py-16 md:py-24">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="animate-in bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-display text-lg text-navy font-semibold mb-2">{v.title}</h3>
                <p className="font-body text-sm text-navy/60 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-3">The People</p>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-semibold">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="animate-in bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-20 h-20 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-lg text-navy font-semibold mb-1">{member.name}</h3>
                <p className="font-body text-xs text-gold font-medium mb-3">{member.role}</p>
                <p className="font-body text-sm text-navy/60 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
