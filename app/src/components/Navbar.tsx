import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Boxes', path: '/subscribe' },
  { label: 'Countries', path: '/#countries' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const showSolid = !isHome || scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showSolid
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo/blue.png" 
              alt="CultureCrate Logo" 
              className="w-10 h-10 object-contain" 
            />
            <span className={`font-display text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${showSolid ? 'text-navy' : 'text-cream'}`}>
              CultureCrate
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-gold ${
                  showSolid ? 'text-navy' : 'text-cream/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className={`font-body text-sm font-medium transition-colors duration-300 hover:text-gold ${
                showSolid ? 'text-navy' : 'text-cream/90'
              }`}
            >
              Sign In
            </Link>
            <Link to="/subscribe" className="btn-gold text-xs py-2.5 px-6">
              Subscribe
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${showSolid ? 'text-navy' : 'text-cream'}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-navy/98 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="font-body text-cream/90 text-base font-medium py-2 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-cream/10">
            <Link
              to="/login"
              className="font-body text-cream/70 text-sm py-2 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/subscribe"
              className="btn-gold text-center text-xs"
              onClick={() => setMobileOpen(false)}
            >
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
