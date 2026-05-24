import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    slug: 'moroccan-tea-ceremony',
    title: 'The Art of Moroccan Tea: A Ceremony of Hospitality',
    excerpt: 'Discover the centuries-old tradition of Moroccan mint tea, a ritual that goes far beyond a simple beverage. From the precise pour height to the symbolic three glasses.',
    image: '/gallery/box-morocco-5.jpg',
    author: 'Amara Okafor',
    date: 'March 15, 2025',
    readTime: '8 min read',
    category: 'Morocco',
  },
  {
    slug: 'talavera-pottery',
    title: 'Talavera: The Colorful Soul of Mexican Ceramics',
    excerpt: 'Journey to Puebla, Mexico, where master artisans have been creating vibrant Talavera pottery for over 400 years using techniques brought from Spain.',
    image: '/gallery/box-mexico-3.jpg',
    author: 'Sofia Martinez',
    date: 'March 10, 2025',
    readTime: '6 min read',
    category: 'Mexico',
  },
  {
    slug: 'alpaca-textiles',
    title: 'Weaving the Andes: The Ancient Art of Alpaca Textiles',
    excerpt: 'High in the Peruvian Andes, indigenous communities continue the tradition of weaving with alpaca wool, creating textiles of extraordinary beauty and warmth.',
    image: '/gallery/box-peru-3.jpg',
    author: 'Marco Rossi',
    date: 'March 5, 2025',
    readTime: '7 min read',
    category: 'Peru',
  },
  {
    slug: 'chinese-tea-culture',
    title: 'From Leaf to Cup: The Philosophy of Chinese Tea Culture',
    excerpt: 'Explore the profound philosophy behind Chinese tea culture, where every step of preparation is a meditation and every sip is a connection to nature.',
    image: '/gallery/box-china-2.jpg',
    author: 'Yuki Tanaka',
    date: 'February 28, 2025',
    readTime: '9 min read',
    category: 'China',
  },
  {
    slug: 'tuscan-olive-oil',
    title: 'Liquid Gold: The Tradition of Tuscan Olive Oil',
    excerpt: 'In the rolling hills of Tuscany, families have been producing extra virgin olive oil for generations. Learn what makes this liquid gold so special.',
    image: '/gallery/box-italy-3.jpg',
    author: 'Marco Rossi',
    date: 'February 20, 2025',
    readTime: '6 min read',
    category: 'Italy',
  },
  {
    slug: 'zellige-mosaic',
    title: 'Zellige: Morocco\'s Geometric Masterpiece',
    excerpt: 'The intricate geometric tilework known as zellige has adorned Moroccan palaces and mosques for over a thousand years. Discover the painstaking craft behind each piece.',
    image: '/gallery/box-morocco-2.jpg',
    author: 'Amara Okafor',
    date: 'February 15, 2025',
    readTime: '7 min read',
    category: 'Morocco',
  },
];

export default function BlogPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Stories - CultureCrate';
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.blog-card').forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-cream min-h-screen pt-24 pb-16">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Journal</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy font-semibold mb-4">
            Stories & Insights
          </h1>
          <p className="font-body text-navy/60 text-lg">
            Deep dives into the cultures, traditions, and artisans behind every CultureCrate box.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link to={`/blog/${posts[0].slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-block w-fit px-3 py-1 bg-gold/10 text-gold text-xs font-body font-semibold rounded-full mb-4">
                  {posts[0].category}
                </span>
                <h2 className="font-display text-2xl md:text-3xl text-navy font-semibold mb-4 group-hover:text-gold transition-colors">
                  {posts[0].title}
                </h2>
                <p className="font-body text-navy/60 leading-relaxed mb-6">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-navy/50">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    <span className="font-body text-sm">{posts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span className="font-body text-sm">{posts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-body font-semibold rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="font-display text-lg text-navy font-semibold mb-2 group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-navy/60 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-navy/40">
                  <span className="font-body text-xs">{post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-navy/20" />
                  <span className="font-body text-xs">{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
