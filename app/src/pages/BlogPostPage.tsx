import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2, Heart, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

const postsData: Record<string, {
  title: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
}> = {
  'moroccan-tea-ceremony': {
    title: 'The Art of Moroccan Tea: A Ceremony of Hospitality',
    image: '/gallery/box-morocco-5.jpg',
    author: 'Amara Okafor',
    date: 'March 15, 2025',
    readTime: '8 min read',
    category: 'Morocco',
    content: [
      'In Morocco, tea is far more than a beverage. It is a ritual, an art form, and perhaps most importantly, a gesture of hospitality that has been perfected over centuries. The traditional Moroccan mint tea, known as "Atay," is an integral part of daily life and social gatherings.',
      'The preparation begins with Chinese green tea, which serves as the base. Fresh mint leaves are added in generous handfuls, followed by a substantial amount of sugar. The tea is brewed in a beautiful silver or brass teapot called a "berrad," and the most distinctive part of the ceremony is the pouring.',
      'The host pours the tea from a great height, creating a long, graceful stream that aerates the tea and creates a frothy crown in each small glass. This technique is not merely for show, it serves to cool the tea and blend the flavors perfectly. The higher the pour, the more honor is shown to the guest.',
      'Traditionally, the first glass is said to be "as gentle as life," the second "as strong as love," and the third "as bitter as death." This poetic tradition reminds us that the tea ceremony is a meditation on the full spectrum of human experience.',
      'When you open your Morocco Edition box, you will find premium green tea and dried mint leaves, along with a traditional tea glass. We invite you to slow down, prepare the tea with intention, and share this moment with someone you care about.',
    ],
  },
};

const relatedPosts = [
  { slug: 'zellige-mosaic', title: 'Zellige: Morocco\'s Geometric Masterpiece', image: '/gallery/box-morocco-2.jpg', category: 'Morocco' },
  { slug: 'talavera-pottery', title: 'Talavera: The Colorful Soul of Mexican Ceramics', image: '/gallery/box-mexico-3.jpg', category: 'Mexico' },
  { slug: 'alpaca-textiles', title: 'Weaving the Andes: Ancient Art of Alpaca Textiles', image: '/gallery/box-peru-3.jpg', category: 'Peru' },
];

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = postsData[slug || ''];

  useEffect(() => {
    if (post) document.title = `${post.title} - CultureCrate`;
    window.scrollTo(0, 0);
  }, [post, slug]);

  if (!post) {
    return (
      <div className="bg-cream min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-navy mb-4">Article Not Found</h1>
          <Link to="/blog" className="btn-gold">Back to Stories</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pt-24 pb-16">
      <div className="section-padding">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 font-body text-sm text-navy/60 hover:text-gold transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Stories
        </Link>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden shadow-xl mb-10">
          <img src={post.image} alt={post.title} className="w-full aspect-[21/9] object-cover" />
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-body font-semibold rounded-full mb-6">
            {post.category}
          </span>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy font-semibold mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 mb-10 pb-8 border-b border-cream-dark/30">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
                <User className="w-5 h-5 text-cream" />
              </div>
              <div>
                <p className="font-body text-sm text-navy font-medium">{post.author}</p>
                <p className="font-body text-xs text-navy/50">{post.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-navy/50">
              <Clock className="w-4 h-4" />
              <span className="font-body text-sm">{post.readTime}</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button className="w-9 h-9 rounded-full border border-cream-dark/30 flex items-center justify-center text-navy/40 hover:text-gold hover:border-gold transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full border border-cream-dark/30 flex items-center justify-center text-navy/40 hover:text-gold hover:border-gold transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.map((paragraph, i) => (
              <p key={i} className="font-body text-navy/70 text-base md:text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-navy rounded-2xl text-center">
            <h3 className="font-display text-2xl text-cream font-semibold mb-3">
              Experience Morocco Yourself
            </h3>
            <p className="font-body text-cream/60 mb-6">
              Get the Morocco Edition box and bring these traditions into your home.
            </p>
            <Link to="/country/morocco" className="btn-gold inline-flex">
              Explore Morocco Box
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <h2 className="font-display text-2xl text-navy font-semibold mb-8">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                to={`/blog/${rp.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-body text-gold font-semibold">{rp.category}</span>
                  <h3 className="font-display text-base text-navy font-semibold mt-1 group-hover:text-gold transition-colors line-clamp-2">
                    {rp.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
