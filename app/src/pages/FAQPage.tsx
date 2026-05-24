import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    category: 'General',
    questions: [
      { q: 'What is CultureCrate?', a: 'CultureCrate is a premium cultural subscription box service that delivers authentic artisan products, stories, and digital experiences from different countries around the world each month.' },
      { q: 'How does it work?', a: 'Choose a country or let us surprise you. Each month, we curate a box of 5-7 authentic items from that culture, along with a story booklet and digital experience access via QR code.' },
      { q: 'Can I choose which country I receive?', a: 'Absolutely! You can select your preferred country each month, or opt for our "Surprise Me" option to discover a new culture.' },
    ],
  },
  {
    category: 'Subscription',
    questions: [
      { q: 'How much does it cost?', a: 'Our Monthly plan is $49.99/month, Premium is $79.99/month, and our 3-month Gift plan is $149.99. Annual subscribers save 20%.' },
      { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time from your account dashboard. There are no cancellation fees.' },
      { q: 'When will I be billed?', a: 'You are billed on the same date each month. Your first box ships within 3-5 business days of your order.' },
      { q: 'Can I pause my subscription?', a: 'Yes! You can pause your subscription for up to 3 months from your dashboard.' },
    ],
  },
  {
    category: 'Shipping',
    questions: [
      { q: 'Where do you ship?', a: 'We ship worldwide! Free shipping is included with all plans.' },
      { q: 'How long does shipping take?', a: 'Domestic (US): 5-7 business days. International: 10-20 business days depending on the destination.' },
      { q: 'How is the box packaged?', a: 'Our boxes use eco-friendly, sustainable packaging. Each item is carefully wrapped and protected to arrive in perfect condition.' },
    ],
  },
  {
    category: 'Items',
    questions: [
      { q: 'Are the items authentic?', a: 'Yes! Every item is sourced directly from artisans and producers in each country. We work with cultural experts to ensure authenticity.' },
      { q: 'Can I buy individual items?', a: 'Some items from past boxes are available in our online shop. Premium subscribers get early access to new items.' },
      { q: 'What if I receive a damaged item?', a: 'We take great care in packaging, but if an item arrives damaged, contact our support team and we will replace it free of charge.' },
    ],
  },
  {
    category: 'Digital Experience',
    questions: [
      { q: 'What is the QR Experience?', a: 'Each box contains a unique QR code that unlocks digital content including virtual tours, traditional music, cooking tutorials, and artisan documentaries.' },
      { q: 'Do I need an app?', a: 'No app required! Simply scan the QR code with your phone camera to access the digital experience in your web browser.' },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-cream min-h-screen pt-24 pb-16">
      <div className="section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">Help Center</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy font-semibold mb-4">
            Frequently Asked
          </h1>
          <p className="font-body text-navy/60 text-lg">
            Everything you need to know about CultureCrate. Can't find the answer you're looking for?{' '}
            <Link to="/contact" className="text-gold hover:underline">Contact us</Link>.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="font-display text-2xl text-navy font-semibold mb-6">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((item, i) => {
                  const key = `${category.category}-${i}`;
                  const isOpen = openItems[key];
                  return (
                    <div
                      key={key}
                      className="bg-white rounded-xl shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/30 transition-colors"
                      >
                        <span className="font-body text-sm md:text-base text-navy font-medium pr-4">{item.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-navy/40 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-5 pb-5">
                          <p className="font-body text-sm text-navy/60 leading-relaxed">{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
