import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import StarfieldCanvas from '../components/StarfieldCanvas';

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-navy flex items-center justify-center overflow-hidden">
      <StarfieldCanvas />

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-6">
          Lost in Space
        </p>
        <h1 className="font-display text-8xl md:text-9xl text-cream font-semibold mb-4" style={{ lineHeight: 1 }}>
          404
        </h1>
        <p className="font-display text-2xl md:text-3xl text-cream/80 mb-4">
          Page Not Found
        </p>
        <p className="font-body text-cream/50 text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          It seems you've wandered off the cultural map. The page you're looking for doesn't exist or has been moved to a new destination.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link to="/" className="btn-gold group">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link to="/subscribe" className="btn-outline border-cream/20 text-cream hover:bg-cream hover:text-navy">
            Explore Boxes
          </Link>
        </div>
      </div>
    </div>
  );
}
