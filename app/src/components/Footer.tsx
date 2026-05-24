import { Link } from 'react-router-dom';
import { Globe, Instagram, Twitter, Youtube, Facebook, Send } from 'lucide-react';
import { useState } from 'react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Boxes', path: '/subscribe' },
  { label: 'Countries', path: '/#countries' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const infoLinks = [
  { label: 'FAQs', path: '/faq' },
  { label: 'Shipping', path: '/faq' },
  { label: 'Returns', path: '/faq' },
  { label: 'Terms & Conditions', path: '/faq' },
  { label: 'Privacy Policy', path: '/faq' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-navy text-cream pt-16 pb-8">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-gold" />
              <span className="font-display text-2xl font-semibold tracking-wide text-cream">
                CultureCrate
              </span>
            </Link>
            <p className="font-body text-sm text-cream/60 leading-relaxed mb-6">
              Bringing cultures closer together, one box at a time. Discover authentic traditions from around the world.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-cream">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-cream">Information</h4>
            <ul className="space-y-3">
              {infoLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-cream">Stay Connected</h4>
            <p className="font-body text-sm text-cream/60 mb-4">
              Subscribe to our newsletter for stories, offers and new boxes.
            </p>
            {subscribed ? (
              <div className="p-4 rounded-lg bg-gold/10 border border-gold/30">
                <p className="font-body text-sm text-gold">Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border border-cream/20 border-r-0 rounded-l-lg px-4 py-3 font-body text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold text-navy px-4 rounded-r-lg hover:bg-gold-hover transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
            <p className="font-body text-xs text-cream/40 mt-3">
              hello@culturecrate.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/40">
            &copy; 2025 CultureCrate. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/faq" className="font-body text-xs text-cream/40 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="font-body text-xs text-cream/40 hover:text-gold transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="font-body text-xs text-cream/40 hover:text-gold transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
