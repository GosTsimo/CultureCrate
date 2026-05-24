import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { countries } from '../data/countries';

const plans = [
  {
    name: 'Monthly',
    price: 49.99,
    period: 'month',
    description: 'Perfect for trying out different cultures',
    features: [
      '1 curated cultural box per month',
      '5-7 authentic artisan items',
      'Digital experience access',
      'Free worldwide shipping',
      'Cancel anytime',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: 79.99,
    period: 'month',
    description: 'The ultimate cultural immersion',
    features: [
      'Everything in Monthly, plus:',
      '8-12 premium artisan items',
      'Exclusive limited-edition pieces',
      'Virtual cooking class included',
      'Priority access to new countries',
      'Personalized cultural guide',
    ],
    popular: true,
  },
  {
    name: 'Gift',
    price: 149.99,
    period: '3 months',
    description: 'Share the joy of discovery',
    features: [
      '3-month prepaid subscription',
      'All Premium box contents',
      'Beautiful gift packaging',
      'Personalized gift message',
      'Recipient can choose countries',
    ],
    popular: false,
  },
];

export default function SubscriptionPage() {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="bg-cream min-h-screen pt-24 pb-16">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Subscription Plans
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy font-semibold mb-4">
            Choose Your Plan
          </h1>
          <p className="font-body text-navy/60 text-lg leading-relaxed">
            Begin your cultural journey with a plan that fits your curiosity. Every box is a new adventure.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 mt-8 p-1.5 bg-cream-dark/50 rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-body text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-navy text-cream shadow-md'
                  : 'text-navy/60 hover:text-navy'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-body text-sm font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-navy text-cream shadow-md'
                  : 'text-navy/60 hover:text-navy'
              }`}
            >
              Yearly
              <span className="ml-1.5 text-xs text-gold">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              onClick={() => setSelectedPlan(i)}
              className={`relative rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                selectedPlan === i
                  ? 'bg-navy text-cream shadow-2xl scale-[1.02]'
                  : 'bg-white text-navy shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gold text-navy text-xs font-body font-semibold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`font-display text-2xl font-semibold mb-1 ${
                  selectedPlan === i ? 'text-cream' : 'text-navy'
                }`}>
                  {plan.name}
                </h3>
                <p className={`font-body text-sm ${
                  selectedPlan === i ? 'text-cream/60' : 'text-navy/50'
                }`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`font-display text-4xl font-semibold ${
                  selectedPlan === i ? 'text-gold' : 'text-navy'
                }`}>
                  ${billingCycle === 'yearly' ? (plan.price * 0.8).toFixed(0) : plan.price}
                </span>
                <span className={`font-body text-sm ml-1 ${
                  selectedPlan === i ? 'text-cream/50' : 'text-navy/40'
                }`}>
                  /{plan.period}
                </span>
                {billingCycle === 'yearly' && (
                  <p className="text-xs text-gold mt-1">Billed annually</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      selectedPlan === i ? 'text-gold' : 'text-navy/40'
                    }`} />
                    <span className={`font-body text-sm ${
                      selectedPlan === i ? 'text-cream/80' : 'text-navy/70'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3.5 rounded-full font-body text-sm font-semibold transition-all ${
                selectedPlan === i
                  ? 'bg-gold text-navy hover:bg-gold-hover'
                  : 'border-2 border-navy/20 text-navy hover:bg-navy hover:text-cream'
              }`}>
                {selectedPlan === i ? 'Select This Plan' : 'Choose Plan'}
              </button>
            </div>
          ))}
        </div>

        {/* Country Selection */}
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-navy font-semibold text-center mb-8">
            Which Culture Will You Explore First?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {countries.map((country) => (
              <Link
                key={country.id}
                to={`/country/${country.id}`}
                className="group relative rounded-xl overflow-hidden aspect-square bg-navy"
              >
                <img
                  src={country.galleryImages[0]}
                  alt={country.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-lg text-cream font-semibold text-center">
                    {country.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Teaser */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <p className="font-body text-navy/50 text-sm">
            Have questions?{' '}
            <Link to="/faq" className="text-gold hover:underline">
              Check our FAQ
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
