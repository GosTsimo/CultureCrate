import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center py-24 px-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Globe className="w-8 h-8 text-gold" />
            <span className="font-display text-3xl text-cream font-semibold tracking-wide">
              CultureCrate
            </span>
          </Link>
          <p className="font-body text-cream/60 text-sm">
            {isLogin ? 'Welcome back to your cultural journey.' : 'Begin your cultural journey today.'}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-navy-light/50 backdrop-blur-sm border border-cream/10 rounded-2xl p-8">
          {/* Toggle */}
          <div className="flex mb-8 bg-navy/50 rounded-full p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2.5 rounded-full font-body text-sm font-medium transition-all ${
                isLogin ? 'bg-gold text-navy' : 'text-cream/60 hover:text-cream'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2.5 rounded-full font-body text-sm font-medium transition-all ${
                !isLogin ? 'bg-gold text-navy' : 'text-cream/60 hover:text-cream'
              }`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block font-body text-sm text-cream/80 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-navy/50 border border-cream/10 rounded-lg font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
            )}

            <div>
              <label className="block font-body text-sm text-cream/80 mb-2">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-navy/50 border border-cream/10 rounded-lg font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block font-body text-sm text-cream/80 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-navy/50 border border-cream/10 rounded-lg font-body text-sm text-cream placeholder:text-cream/30 focus:outline-none focus:border-gold transition-colors pr-12"
                  placeholder="Min 8 characters"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="font-body text-xs text-gold hover:underline">
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className="w-full btn-gold py-3.5">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </div>

        <p className="text-center mt-6 font-body text-xs text-cream/40">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
