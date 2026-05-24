import { Link } from 'react-router-dom';
import StarfieldCanvas from '../components/StarfieldCanvas';
import { countries } from '../data/countries';
import { ArrowRight } from 'lucide-react';

export default function CountryExplorer() {
  return (
    <section id="countries" className="relative w-full min-h-screen bg-navy overflow-hidden">
      {/* Starfield Background */}
      <StarfieldCanvas />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-20 px-6">
        <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
          Explore The World
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream font-semibold text-center mb-4">
          Choose Your Destination
        </h2>
        <p className="font-body text-cream/60 text-base md:text-lg text-center max-w-xl mb-12">
          Each box is a portal to a different culture. Select a country to begin your journey.
        </p>

        {/* Country Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {countries.map((country) => (
            <Link
              key={country.id}
              to={`/country/${country.id}`}
              className="group relative px-6 py-3 rounded-full border border-cream/20 bg-navy/40 backdrop-blur-sm text-cream font-body text-sm font-medium transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:shadow-glow"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">{countryFlagEmoji(country.flag)}</span>
                {country.name}
              </span>
              <span className="absolute inset-0 rounded-full border border-gold/0 group-hover:border-gold/50 transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-7xl">
          {countries.map((country) => (
            <Link
              key={country.id}
              to={`/country/${country.id}`}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] bg-navy-light"
            >
              <img
                src={country.galleryImages[0]}
                alt={country.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-3xl mb-2">{countryFlagEmoji(country.flag)}</span>
                <h3 className="font-display text-2xl text-cream font-semibold mb-1">
                  {country.name}
                </h3>
                <p className="font-body text-cream/60 text-xs leading-relaxed mb-3 line-clamp-2">
                  {country.tagline}
                </p>
                <div className="flex items-center gap-2 text-gold font-body text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Explore Box
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          to="/subscribe"
          className="btn-gold mt-12 group"
        >
          View All Subscription Plans
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

function countryFlagEmoji(code: string): string {
  const flags: Record<string, string> = {
    'MA': 'MA',
    'MX': 'MX',
    'PE': 'PE',
    'CN': 'CN',
    'IT': 'IT',
  };
  const f = flags[code];
  if (!f) return '';
  return String.fromCodePoint(
    ...[...f].map(c => 127397 + c.charCodeAt(0))
  );
}
